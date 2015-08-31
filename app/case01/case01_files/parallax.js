//main configs
var currentHoverIndex = 0;
var selectedMenuId = 0;
var $contentBlocks;

var sectionsApps = [];
var servicesApp;
var currentMenuItem;
//====================
function onResize(){
    /*
    for(var index in sectionsApps){
        var sectionApp = sectionsApps[index];
        console.log(sectionApp, sectionApp.resize);
        sectionApp.resize();
    }
    */
    for(var i=0; i<sectionsApps.length; i++){
        var sectionApp = sectionsApps[i];
        sectionApp.resize();
    }
}
function Move(forceAlign){
    var pos = $window.scrollTop(); //position of the scrollbar
    var pos_w = pos+windowHeight; //position of the scrollbar

    
    forceAlign = forceAlign || false;
    
    var hoverIndex = 0;
    for(var index=0; index<sectionsApps.length; index++){
        var sectionApp = sectionsApps[index];
        var sectionTop = sectionApp.top();
        var sectionH = sectionApp.height();
        var move_ratio = 0;
        var move_position = 0;
        if(pos_w > sectionTop && pos_w<sectionTop + sectionH+windowHeight){
            if(!sectionApp.visible || forceAlign) sectionApp.showMe();
            move_ratio = (pos - sectionTop+windowHeight)/(sectionH+windowHeight)
            move_position = pos+windowHeight-sectionTop;

            sectionApp.updateBackgroundPosition(move_ratio);
            sectionApp.align(move_ratio, move_position);
        }else{
            if(sectionApp.visible) sectionApp.hideMe();
            //$that.addClass("inactive");
        }
        if(sectionTop<=pos+15){
                hoverIndex = index;
        }
    }
    if(hoverIndex !=currentHoverIndex){
        if(currentMenuItem){
            currentMenuItem.removeClass("selected");
        }
        if(hoverIndex>0){
            currentMenuItem = $("#menu-item-"+hoverIndex).addClass("selected");
        }
        currentHoverIndex = hoverIndex;
        selectedMenuId = currentHoverIndex;
    }
}
function moveUp(){

    if(selectedMenuId == 2 || selectedMenuId == 3){
        if(servicesApp.moveUp()){
            return;
        }
    }

    selectedMenuId--;
    if(selectedMenuId <= 0){
            selectedMenuId = 0;
            openContainerById(selectedMenuId, true);
    }else{
            $("#menu-item-"+selectedMenuId).click();
    }
}
function moveDown(){
    if(selectedMenuId == 1 || selectedMenuId == 2){
        if(servicesApp.moveDown()){
            return;
        }
    }
    selectedMenuId++;
    selectedMenuId = Math.min(selectedMenuId,7);
    $("#menu-item-"+selectedMenuId).click();
}
function moveLeft(){
    switch(parseInt(selectedMenuId)){
        case 0:
            homeControler.moveLeft();
        break;    
        case 4:
                $("#projectsPrevBtn").click();
        break;
        case 6:
                $("#clientsPrevBtn").click();
        break;
    }
}
function moveRight(){
    switch(parseInt(selectedMenuId)){
        case 0:
            homeControler.moveRight();
        break;
        case 4:
                $("#projectsNextBtn").click();
        break;	
        case 6:
                $("#clientsNextBtn").click();
        break;			
    }
}
$(document).ready(function() { //when the document is ready...
    $contentBlocks = $(".content-block");

    sectionsApps.push(new HomeApp($("#home")));
    sectionsApps.push(new AboutApp($("#about")));
    servicesApp = new ServicesApp($("#services"));
    sectionsApps.push(servicesApp);
    sectionsApps.push(new PlatformsApp($("#platforms")));
    sectionsApps.push(new CaseStudiesApp($("#casestudies")));
    sectionsApps.push(new CareerApp($("#team")));
    sectionsApps.push(new ClientsApp($("#clients")));
    sectionsApps.push(new ContactsApp($("#contacts")));


    $('a[id^="menu-item"]').click(function(event){
        //event.preventDefault();
        var itemId = $(this).attr('id').split("-").pop();
        openContainerById(itemId, true);
    });
    $("#homeLink").click(function(event){
        event.preventDefault();
        openContainerById(0, true);
    });
	
    windowHeight = $window.height();
    windowWidth = $window.width();

    $window.resize(function(){ //if the user resizes the window...
        parallaxContentY = (contentH - windowHeight)/2;
        windowHeight = $window.height();
        windowWidth = $window.width();
        onResize();
        Move(); //move the background images in relation to the movement of the scrollbar
    });	
    $(window).scroll(function(event){ //when the user is scrolling...
            Move(); //move the background images in relation to the movement of the scrollbar
    });	
    $window.bind('mousewheel', function(){
            $('html,body').stop();
    });
    var keyCount = 0;
    $(document).keydown(function(e){
    if(e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
        keyCount++;
        switch(e.keyCode){
            case 38://up
                    moveUp();
                    return false;
            break;
            case 40://down
                    moveDown();
                    return false;
            break;
            case 39:
                    moveRight();
            break;
            case 37:
                    moveLeft();
                    return false;
            break;
            default:
                    //alert(e.keyCode);
            break;
        }
    });

    onResize();
    Move(true);

    selectedMenuId = currentHoverIndex;
    
    var start_hash = getHash();
    if(start_hash.length>0){
        for(var str_index in structure){
            if(structure[str_index].path == start_hash){
                openContainerById(str_index, false);
                break;
            }
        }
    }

    k_preloader.init();
    /*
    $("#preloader").delay(500).fadeOut('slow', function() {
        $("#preloader").remove();
    });
    */
});

function openContainerByName(container_name){
    for(var index in structure){
        if(structure[index].container == container_name){
            openContainerById(index, true);
            break;
        }
    }
}

function openContainerById(itemId, animate){
    selectedMenuId = itemId;
    var str = structure[itemId];
    $container = $("#"+str.container);

    var new_scrollTop = $container.position().top;
    if(itemId == 2){
        new_scrollTop += 300 + ServicesApp.servicesMoveDeltaHalf;
    }else if(itemId == 6){
        //new_scrollTop += 200;
    }else if(itemId >0 && itemId<7){
        //new_scrollTop += 100;
    }

    /*
    if(itemId == 0){
        new_scrollTop = 0
    }else if(itemId == 7){
        new_scrollTop -= parallaxContentY;
    }
    */
    moveScrollTo(new_scrollTop, animate);
}
function moveScrollTo(pos, animate){
    $('html,body').stop();
    if(animate){
        $('html,body').animate(
            {
                scrollTop: pos
            },
            {queue: false, easing: 'easeInOutExpo', duration: 1500}
        );
    }else{
        $('html,body').scrollTop(pos);
    }
}