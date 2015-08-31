var inheriting = { };

//====================BASE CLASS================================
function BaseApp($section){
    if (arguments[0] === inheriting) return;
    var that = this;
    that.$section = $section;
}
BaseApp.prototype = {
    visible: true,
    bck_move_delta: 300,
    $section: null,
    //public functions
    resize: function () {
        "use strict";
        var that = this;
    },
    contentVisible: false,
    align: function (move_ratio, move_position) {
        "use strict";
        var that = this;
    },
    showMe: function(){
        var that = this;
        that.visible = true;
        that.$section.removeClass("inactive");
    },
    hideMe: function(){
        var that = this;
        that.visible = false;
        that.$section.addClass("inactive");
    },
    height: function(){
        var that = this;
        return that.$section.height()
    },
    top: function(){
        var that = this;
        return that.$section.position().top
    },
    updateBackgroundPosition: function(move_ratio){
        this.$section.css({'backgroundPosition':'50% -'+this.bck_move_delta * move_ratio+'px'});

    }
}
//====================BASE CLASS================================
//

//
//====================CONTACTS CLASS================================
function ContactsApp($section) {
    var that = this;
    BaseApp.call(that, $section);
    that.$mapCorner = $("#contacts-map-corner");
}
{
    ContactsApp.prototype = new BaseApp(inheriting);
    ContactsApp.prototype.$mapCorner = null;
    ContactsApp.prototype.firstTime = true;
    ContactsApp.prototype.projectsSlider = null;
    ContactsApp.prototype.align = function (move_ratio, move_position) {
        var that = this;
    };
    ContactsApp.prototype.resize = function(){
        var that = this;
        BaseApp.prototype.resize.call(that);
        that.$section.height(Math.max(950, windowHeight));

        var mapCornerWidth = (windowHeight * cornerW)/cornerH;
        var mapCornerHeight = windowHeight*2;

        var mapCornerH = $("#map-container").height() * 1.6;
        that.$mapCorner.css("height", mapCornerH);
        that.$mapCorner.css("margin-top", -mapCornerH/2);


    }
    ContactsApp.prototype.updateBackgroundPosition = function (move_ratio) {
        var that = this;
    }

    ContactsApp.prototype.showMe = function(){
        var that = this;
        BaseApp.prototype.showMe.call(that);
        if(that.firstTime){
            that.firstTime = false;
            that.initMap();
        }
    };
    ContactsApp.prototype.hideMe = function(){
        var that = this;
        BaseApp.prototype.hideMe.call(that)
    };
    ContactsApp.prototype.initMap = function(){
        var latlng = new google.maps.LatLng(54.735900, 25.221987);
        var myOptions = {
            zoom: 14,
            center: latlng,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            panControl: false,
            /*
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.LARGE,
                position: google.maps.ControlPosition.RIGHT_CENTER
            },
            */
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                position: google.maps.ControlPosition.RIGHT_BOTTOM
            },
            streetViewControl: false


        };
        var map = new google.maps.Map(document.getElementById("map-container"),
            myOptions);
        var image = '/images/kryptis_marker.png';
        var myLatLng = new google.maps.LatLng(54.724600, 25.233187);
        var beachMarker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: image
        });
        $zoomControls = $("#zoom-controls");
        map.controls[google.maps.ControlPosition.RIGHT_CENTER].push($zoomControls[0]);
        $("a.zoomin", $zoomControls).click(function(e){
            e.preventDefault();
            map.setZoom(map.getZoom()+1);
        });
        $("a.zoomout", $zoomControls).click(function(e){
            e.preventDefault();
            map.setZoom(map.getZoom()-1);
        });

        google.maps.event.addListener(map, 'zoom_changed', function() {
            $("div.zoompos", $zoomControls).css("top", (1-map.getZoom()/21) * 67);
        });
        $("div.zoompos", $zoomControls).css("top", (1-map.getZoom()/21) * 67);
    }
}
//====================CONTACTS CLASS================================
//

//
//====================PLATFORMS CLASS================================
function PlatformsApp($section) {
    var that = this;
    BaseApp.call(that, $section);
    that.$tableBg = $("#platforms-table-bg");
    that.$tableItems = $("#platforms-items");
    that.$introImage = $("#platforms-intro-image");
    that.$movingImgs = $("#platforms-intro-image .moving-img");
    that.$rightBlock = $("#platforms div.right-block");
    that.$categoriesLinks = $("div#platforms-categories");
    that.$categoriesContent = $("div#platforms-categories-content");
    that.$categoryContents = $("#platforms-categories-content div.platforms-category-content");
    that.$categoriesContentScroller = $("#platforms-categories-content div.content-scroller");

    that.$categoryContents.width(windowWidth);
    that.$categoriesContentScroller.width(windowWidth * that.$categoryContents.length);
    that.$fixedContent = $("#platforms .fixed-content");
    that.expandDebeseliai(that.debeseliaiRatio);
    that.$copyrights =  $("#platforms div.platforms-copyrights");

    that.$hiddenElements = $(".hidden", that.$section);

    that.$categoriesBtns = $('a[id^="platforms-cat"]');
    that.$categoriesBtns.mouseover(function(event){
        if($(this).hasClass("selected")) return;
        $(".icon-block div", $(this)).animate(
                {
                    top: "-25px"
                },
                {queue: false, easing: 'easeOutExpo', duration: 500}
        );

    });
    that.$categoriesBtns.mouseout(function(event){
        if($(this).hasClass("selected")) return;
        $(".icon-block div", $(this)).animate(
                {top: "0px"},
                {queue: false, easing: 'easeOutExpo', duration: 500}
        );
    });

    that.$categoriesBtns.click(function(event){
        event.preventDefault();
        var catID = getId($(this).attr("id"));
        that.openCategoryContent(catID, $(this));
    });

    $(".platforms-close-btn").click(function(event){
        event.preventDefault();
        that.closeCategoriesContent();
    });

    $('.platform-link').mouseover(function(){
        /*
        $("img.icon", $(this)).stop().animate(
                {
                    top: -15,
                    right: 22
                },
                {queue: false, easing: 'easeOutExpo', duration: 500}
        );
        */
    })
    $('.platform-link').mouseout(function(){
        /*
        $("img.icon", $(this)).stop().animate(
                {
                    top: -35,
                    right: 10
                },
                {queue: false, easing: 'easeOutExpo', duration: 500}
        );
        */
    });
}
{
    PlatformsApp.prototype = new BaseApp(inheriting);
    PlatformsApp.prototype.$tableBg = null;
    PlatformsApp.prototype.$tableItems = null;
    PlatformsApp.prototype.$introImage = null;
    PlatformsApp.prototype.tableBgH = 260;
    PlatformsApp.prototype.tableItemsH = 430;
    PlatformsApp.prototype.$movingImgs = null;
    PlatformsApp.prototype.$rightBlock = null;
    PlatformsApp.prototype.$categoriesLinks = null;

    PlatformsApp.prototype.$categoriesContentScroller = null;
    PlatformsApp.prototype.$categoryContents= null;
    PlatformsApp.prototype.$categoriesContent = null;
    PlatformsApp.prototype.$fixedContent= null;
    PlatformsApp.prototype.$categoriesBtns = null;
    PlatformsApp.prototype.$copyrights = null;



    PlatformsApp.prototype.currentSelectedCategory=0;
    PlatformsApp.prototype.platformOpened = false;
    PlatformsApp.prototype.$hiddenElements = null;

    PlatformsApp.prototype.itemsShowing = false;
    PlatformsApp.prototype.debeseliaiRatio = 1;
    PlatformsApp.prototype.debeseliaiRatioAnimId = 1;



    PlatformsApp.prototype.align = function (move_ratio, move_position) {
        var that = this;
        var topPos = move_position - windowHeight;
        if(!that.platformOpened){
            var halfW = windowWidth/2;
            that.$rightBlock.animate(
                {
                    marginRight: Math.min(0, -halfW + halfW*move_ratio*2)
                },
                {queue: false, easing: 'easeOutExpo', duration: 1000}
            );
        }

        setStatus(move_position, that.itemsShowing);

        if(move_position>800 && that.itemsShowing==false){
            that.itemsShowing = true;
            that.$tableItems.animate(
                {
                    left: 0
                },
                {queue: false, easing: 'easeOutExpo', duration: 1500}
            );
            that.$introImage.fadeIn(500);
            that.showDebeseliai();


        }else if(move_position<800 && that.itemsShowing){
            that.itemsShowing = false;
            that.$tableItems.animate(
                {
                    left: -780
                },
                {queue: false, easing: 'easeOutExpo', duration: 1500}
            );
            that.$introImage.fadeOut(500);
            that.hideDebeseliai();
        }
    };
    PlatformsApp.prototype.showDebeseliai = function(){
        var that = this;
        clearInterval(that.debeseliaiRatioAnimId)
        that.debeseliaiRatio = 1;
        that.debeseliaiRatioAnimId = setInterval(function(delta){
            that.debeseliaiRatio *= 0.9;
            if(that.debeseliaiRatio<=0.01){
                clearInterval(that.debeseliaiRatioAnimId)
                that.debeseliaiRatio = 0;
            }
            that.expandDebeseliai(that.debeseliaiRatio);
        }, 33, 0.01);
    }
    PlatformsApp.prototype.hideDebeseliai = function(){
        var that = this;
        clearInterval(that.debeseliaiRatioAnimId)
        that.debeseliaiRatio = 0.1;
        that.debeseliaiRatioAnimId = setInterval(function(delta){
            that.debeseliaiRatio *= 1.2;

            if(that.debeseliaiRatio>=1){
                clearInterval(that.debeseliaiRatioAnimId)
            }
            that.expandDebeseliai(that.debeseliaiRatio);
        }, 33, 0.01);
    }
    PlatformsApp.prototype.expandDebeseliai = function(ratio){
        var that = this;
        that.$movingImgs.each(function(index){
            $(this).css("left", ($(this).data("start-x") + $(this).data("move-x")*ratio));
            $(this).css("bottom", ($(this).data("start-y") + $(this).data("move-y")*ratio));
        });
    };
    PlatformsApp.prototype.showMe = function(){
        var that = this;
        BaseApp.prototype.showMe.call(that);

        that.$hiddenElements.stop().show();
    };
    PlatformsApp.prototype.hideMe = function(){
        var that = this;
        BaseApp.prototype.hideMe.call(that)
        that.$hiddenElements.stop().hide();
    };
    PlatformsApp.prototype.resize = function(){
        var that = this;
        BaseApp.prototype.resize.call(that)
        //$(".txt", that.$section).height(Math.max(730, windowHeight));
        that.$categoryContents.width(windowWidth);
        that.$categoriesContentScroller.width(windowWidth * that.$categoryContents.length);
    };
    PlatformsApp.prototype.openCategoryContent = function(id, $this){
        var that = this;

        if(!that.platformOpened){
            that.$categoriesContent.stop().delay(500).fadeIn(300);
            that.$tableItems.stop().animate(
                {marginLeft: -770},
                {queue: false, easing: 'easeOutExpo', duration: 1000}
            );
            that.$introImage.stop().animate(
                {marginLeft: -770},
                {queue: false, easing: 'easeOutExpo', duration: 1000}
            );
            that.$rightBlock.stop().animate(
                {marginRight: -windowWidth/2},
                {queue: false, easing: 'easeOutExpo', duration: 1000}
            );
            /*
            that.$tableBg.stop().animate(
                {marginBottom: -100},
                {queue: false, easing: 'easeOutExpo', duration: 1000}
            );
            */
            //that.$copyrights.fadeTo(500,0);
            that.platformOpened = true;
        }
        that.$categoriesContentScroller.animate(
            {
                marginLeft: -windowWidth * $this.parent().index()
            },
            {queue: false, easing: 'easeOutExpo', duration: 1000}
        );

        $('.icon-block', that.$categoriesBtns).fadeTo(200, 0.5);
        $('.icon-block', $this).stop().fadeTo(200, 1.5);

        that.$categoriesBtns.removeClass("selected");
        $this.addClass("selected");
        that.$categoriesBtns.mouseout();
        //moveScrollTo(that.top() + that.height() - windowHeight, true);
    };
    PlatformsApp.prototype.closeCategoriesContent = function(){
        var that = this;
        that.$categoriesContent.stop().fadeOut(300);
        that.$tableItems.stop().animate(
            {marginLeft: 0},
            {queue: false, easing: 'easeOutExpo', duration: 1000}
        );

        that.$introImage.stop().animate(
            {marginLeft: 0},
            {queue: false, easing: 'easeOutExpo', duration: 1000}
        );
        that.$rightBlock.stop().animate(
            {marginRight: 0},
            {queue: false, easing: 'easeOutExpo', duration: 1000}
        );
        /*
        that.$tableBg.stop().animate(
            {marginBottom: 0},
            {queue: false, easing: 'easeOutExpo', duration: 1000}
        );
        */
        $('.icon-block', that.$categoriesBtns).stop().fadeTo(200, 1);
        //that.$copyrights.fadeTo(500,1);
        that.$categoriesBtns.removeClass("selected");
        that.$categoriesBtns.mouseout();
        that.platformOpened = false;
        that.showDebeseliai();
    };
}
//====================PLATFORMS CLASS================================
//

//
//====================CAREER CLASS================================
function CareerApp($section) {
    var that = this;
    BaseApp.call(that, $section);
    that.$imagesContainer = $("#career-images-container");
    that.$rightImage = $("#career-right-image");
    that.$leftImage = $("#career-left-image");
    that.$phrasesContainer = $("#career-phrases-cont");

    that.$experienceImage = $("#career-experience").css("left", -300);
    that.$energyImage = $("#career-energy").css("right", -300);
    that.$creativityImage = $("#career-creativity").data("visible", false).fadeTo(0,0);
    that.$careerStatus = $("#career-status");

    that.$hiddenElements = $(".hidden", that.$section);
}
{
    CareerApp.prototype = new BaseApp(inheriting);
    CareerApp.prototype.visiblePhrases = true;

    CareerApp.prototype.$imagesContainer = null;
    CareerApp.prototype.$rightImage = null;
    CareerApp.prototype.$leftImage = null;
    CareerApp.prototype.$phrasesContainer = null;
    CareerApp.prototype.$experienceImage = null;
    CareerApp.prototype.$energyImage = null;
    CareerApp.prototype.$creativityImage = null;
    CareerApp.prototype.$careerStatus = null;

    CareerApp.prototype.$hiddenElements = null;


    CareerApp.prototype.align = function (move_ratio, move_position) {
        var that = this;
        var topPos = move_position - windowHeight;
        var topRatio = topPos/1600;

        if(topPos>310){
            if(that.visiblePhrases){
                that.visiblePhrases = false;
                that.$phrasesContainer.animate(
                    {marginTop: -250},
                    {queue: false, easing: 'easeOutExpo', duration: 1000}
                )
            }
        }else{
            if(!that.visiblePhrases){
                that.visiblePhrases = true;
                that.$phrasesContainer.animate(
                    {marginTop: 0},
                    {queue: false, easing: 'easeOutExpo', duration: 1000}
                )
            }
        }

        if(move_position<1600){
            that.$leftImage.css("left", Math.min(0, -300 * (1-move_ratio*2)));
            that.$rightImage.css("right", Math.min(0, -300 * (1-move_ratio*2)));
        }else{
            var hideRatio = (move_position-1600)/windowHeight;
            that.$leftImage.css("left", Math.min(0, -300 * (hideRatio)));
            that.$rightImage.css("right", Math.min(0, -300 * (hideRatio)));
        }

        if(topPos>=0){
            if(that.$creativityImage.data("visible") == false){
                that.$creativityImage.data("visible", true);
                that.$creativityImage.stop().fadeTo(1000,1);
                that.$experienceImage.animate({left: 210},{queue: false, easing: 'easeOutExpo', duration: 2000})
                that.$energyImage.animate({right: 100},{queue: false, easing: 'easeOutExpo', duration: 2000})
            }
        }else{
            if(that.$creativityImage.data("visible")){
                that.$creativityImage.data("visible", false);
                that.$creativityImage.stop().fadeTo(500,0);

                that.$experienceImage.animate({left: -300},{queue: false, easing: 'easeOutExpo', duration: 2000})
                that.$energyImage.animate({right: -300},{queue: false, easing: 'easeOutExpo', duration: 2000})

            }
        }
        if(move_position<1600){
            that.$careerStatus.css("bottom", Math.min(0,-100 + move_position-1060));
        }else{
            that.$careerStatus.css("bottom", move_position-1600);
        }

        //that.$creativityImage.css("opacity", Math.min(1, move_ratio*1*1.5));
    };
    CareerApp.prototype.showMe = function(){
        var that = this;
        BaseApp.prototype.showMe.call(that);

        that.$hiddenElements.stop().show();
    };
    CareerApp.prototype.hideMe = function(){
        var that = this;
        BaseApp.prototype.hideMe.call(that)
        that.$hiddenElements.stop().hide();
    };
}
//====================CAREER CLASS================================
//

//
//====================CLIENTS CLASS================================
function ClientsApp($section) {
    var that = this;
    BaseApp.call(that, $section);
    that.$logosBg1 = $("#clients div.logos-bg-1")
    that.$logosBg2 = $("#clients div.logos-bg-2")
}
{
    ClientsApp.prototype = new BaseApp(inheriting);
    ClientsApp.prototype.$logosBg1 = null;
    //ClientsApp.prototype.$logosBg2 = null;
    ClientsApp.prototype.firstTime = true;
    ClientsApp.prototype.clientsSlider = null;
    ClientsApp.prototype.align = function (move_ratio, move_position) {
        var that = this;

        //var topPos = move_position - windowHeight;
        //var topRatio = topPos/1600;

        //that.$logosBg1.css("backgroundPosition", "left "+(100*move_ratio)+"px");
        //that.$logosBg2.css("backgroundPosition", "right "+(200*move_ratio)+"px");
    };

    ClientsApp.prototype.showMe = function(){
        var that = this;
        BaseApp.prototype.showMe.call(that);
        if(that.firstTime){
            that.firstTime = false;

            that.clientsSlider = new KSlider({
                prefix: "clients",
                loadUrl: "/clients/listingItemsAjax/category.",
                positionMoveDelta: 201,
                invalidateFn: function(){
                    $(".clients-item").bind('mouseenter', function() {
                        $(".clients-item-over-bg", $(this)).stop().show().fadeTo(0,0).animate({opacity: $(this).data("whitebg")?0.9:0.1},50);
                    });
                    $(".clients-item").bind('mouseleave', function() {
                        $(".clients-item-over-bg", $(this)).stop().fadeOut(50);
                    });
                }
            });
            if($("#clients-container .clients-item").length<1){
                that.clientsSlider.changeFilter(0);//load default
            }
        }
    };
    ClientsApp.prototype.hideMe = function(){
        var that = this;
        BaseApp.prototype.hideMe.call(that)
    };
}
//====================CLIENTS CLASS================================
//

//
//====================CASESTUDIES CLASS================================
function CaseStudiesApp($section) {
    var that = this;
    BaseApp.call(that, $section);
    that.$padding0 = $(".dynamic-padding-0", that.$section);
    that.$padding20 = $(".dynamic-padding-20", that.$section);
}
{
    CaseStudiesApp.prototype = new BaseApp(inheriting);
    CaseStudiesApp.prototype.$padding20 = null;
    CaseStudiesApp.prototype.$padding0 = null;
    CaseStudiesApp.prototype.firstTime = true;
    CaseStudiesApp.prototype.projectsSlider = null;
    CaseStudiesApp.prototype.align = function (move_ratio, move_position) {
        var that = this;
        //var topPos = move_position - windowHeight;
        //var topRatio = topPos/1600;
    };

    CaseStudiesApp.prototype.showMe = function(){
        var that = this;
        BaseApp.prototype.showMe.call(that);
        if(that.firstTime){
            that.firstTime = false;
            that.projectsSlider = new KSlider({
                prefix: "projects",
                loadUrl: "/catalog/listingItemsAjax/category.",
                positionMoveDelta: 338,
                invalidateFn: function(){
                    $(".projects-item").bind('mouseenter', function() {
                        $(".desc-container", $(this)).stop().show().fadeTo(0,0).animate({opacity: 0.9},200);
                    });
                    $(".projects-item").bind('mouseleave', function() {
                        $(".desc-container", $(this)).stop().fadeOut();
                    });
                }
            });
            if($("#projects-container .projects-item").length<1){
                $("#casestudies-projects .projects-filters ul > li > a").first().click();
            }
            
        }
    };
    CaseStudiesApp.prototype.hideMe = function(){
        var that = this;
        BaseApp.prototype.hideMe.call(that)
    };
}
//====================CASESTUDIES CLASS================================
//


//
//====================ABOUT CLASS================================
function AboutApp($section) {
    var that = this;
    BaseApp.call(that, $section);
    that.$aboutBlock = $("#about div.texts-block");
    that.$aboutBlock1 = $("#about .block-1");
    that.$aboutBlock2 = $("#about .block-2");
}
{
    AboutApp.prototype = new BaseApp(inheriting);
    AboutApp.prototype.$aboutBlock =  null;
    AboutApp.prototype.$aboutBlock1 =  null;
    AboutApp.prototype.$aboutBlock2 =  null;
    AboutApp.prototype.align = function (move_ratio, move_position) {
        var that = this;
        var topPos = move_position - windowHeight;
        var topRatio = topPos/1600;
        //that.$aboutBlock1.css("marginTop", -topPos + 400);
        that.$aboutBlock2.css("top", -230 + 200 *topRatio);
        that.$aboutBlock.animate(
            {
                marginTop: Math.max(0, 500*topRatio),
                marginLeft: 100 - 200*topRatio
            },
            {queue: false, easing: 'easeOutExpo', duration: 1000}
        );
    };

    AboutApp.prototype.resize = function(){
        var that = this;
        BaseApp.prototype.resize.call(that);
        redrawAboutBlocks();
    };

    AboutApp.prototype.showMe = function(){
        var that = this;
        BaseApp.prototype.showMe.call(that);
        that.$aboutBlock.show();
    };
    AboutApp.prototype.hideMe = function(){
        var that = this;
        BaseApp.prototype.hideMe.call(that)
        that.$aboutBlock.hide();
    };
}
//====================ABOUT CLASS================================
//

//
//====================SERVICES CLASS================================
function ServicesApp($section){
    var that = this;
    BaseApp.call(that, $section);

    that.currentContentIndex = 0;

    that.$hiddenElements = $(".hidden", that.$section);

    that.$servicesCopyrighsContainer = $("#services div.copyrights-container");
    that.$servicesLeftCopyrighsContainer = $("#services div.copyrights-left-container");
    that.$servicesBrandLogo = $("#services div.brand-img-container");

    that.$contentSlider = $("#services div.content-container > a.content-slider");
    that.$contentItems = $("#services div.content-container > a.content-item");

    that.$illustrations = $("#services .illustrations");

    that.$servicesIll1 = $("#services-ill-1").data("visible", false);
    that.$servicesIll2 = $("#services-ill-2").data("visible", false);
    that.$servicesIll3 = $("#services-ill-3").data("visible", false);
    that.$servicesIll4 = $("#services-ill-4").data("visible", false);
    that.$servicesIll5 = $("#services-ill-5").data("visible", false);
    that.$servicesIll6 = $("#services-ill-6").data("visible", false);

    that.$servicesIll6Img2 = $("#services .illustrations #services-ill-6 img.img-2");
    that.$servicesIll6Img1 = $("#services .illustrations #services-ill-6 img.img-1");

    that.$servicesIll5Img1 = $("#services .illustrations #services-ill-5 img.img-1");
    that.$servicesIll5Img2 = $("#services .illustrations #services-ill-5 img.img-2");

    that.$servicesIll4Img1 = $("#services .illustrations #services-ill-4 img.img-1");
    that.$servicesIll4Img2 = $("#services .illustrations #services-ill-4 img.img-2");
    that.$servicesIll4Img3 = $("#services .illustrations #services-ill-4 img.img-3");

    that.$servicesIll3Img0 = $("#services .illustrations #services-ill-3 img.img-0");//lines
    that.$servicesIll3Img1 = $("#services .illustrations #services-ill-3 img.img-1");
    that.$servicesIll3Img2 = $("#services .illustrations #services-ill-3 img.img-2");
    that.$servicesIll3Img3 = $("#services .illustrations #services-ill-3 img.img-3");
    that.$servicesIll3Img4 = $("#services .illustrations #services-ill-3 img.img-4");
    that.$servicesIll3Img5 = $("#services .illustrations #services-ill-3 img.img-5");
    that.$servicesIll3Img6 = $("#services .illustrations #services-ill-3 img.img-6");
    that.$servicesIll3Img7 = $("#services .illustrations #services-ill-3 img.img-7");
    that.$servicesIll3Img8 = $("#services .illustrations #services-ill-3 img.img-8");

    that.$servicesIll2Img1 = $("#services .illustrations #services-ill-2 img.img-1");
    that.$servicesIll2Img2 = $("#services .illustrations #services-ill-2 img.img-2");
    that.$servicesIll2Img3 = $("#services .illustrations #services-ill-2 img.img-3");

    that.$servicesIll1Imgs = $("#services .illustrations #services-ill-1 img.moving-img");


    that.$contentItems.click(function(e){
        e.preventDefault();
        var index = parseInt($(this).data("index"));
        moveScrollTo(that.$section.position().top + 300 + ServicesApp.servicesMoveDelta * (index+0.5), true);

    })
}
{
    ServicesApp.prototype.currentContentIndex = 0;
    ServicesApp.servicesMoveDelta = 1600;
    ServicesApp.servicesMoveDeltaHalf = 800;
    ServicesApp.prototype = new BaseApp(inheriting);
    ServicesApp.prototype.$servicesCopyrighsContainer = null;
    ServicesApp.prototype.$servicesLeftCopyrighsContainer = null;
    ServicesApp.prototype.$servicesBrandLogo = null;
    ServicesApp.prototype.$illustrations = null;
    ServicesApp.prototype.$servicesIll1Imgs = null;
    ServicesApp.prototype.$servicesIll2 = null;
    ServicesApp.prototype.$servicesIll3 = null;
    ServicesApp.prototype.$servicesIll4 = null;
    ServicesApp.prototype.$servicesIll5 = null;
    ServicesApp.prototype.$servicesIll6 = null;

    ServicesApp.prototype.$servicesIll6Img1 = null;
    ServicesApp.prototype.$servicesIll6Img2 = null;

    ServicesApp.prototype.$servicesIll5Img1 = null;
    ServicesApp.prototype.$servicesIll5Img2 = null;

    ServicesApp.prototype.$servicesIll4Img1 = null;
    ServicesApp.prototype.$servicesIll4Img2 = null;
    ServicesApp.prototype.$servicesIll4Img3 = null;

    ServicesApp.prototype.$servicesIll3Img0 = null;
    ServicesApp.prototype.$servicesIll3Img1 = null;
    ServicesApp.prototype.$servicesIll3Img2 = null;
    ServicesApp.prototype.$servicesIll3Img3 = null;
    ServicesApp.prototype.$servicesIll3Img4 = null;
    ServicesApp.prototype.$servicesIll3Img5 = null;
    ServicesApp.prototype.$servicesIll3Img6 = null;
    ServicesApp.prototype.$servicesIll3Img7 = null;
    ServicesApp.prototype.$servicesIll3Img8 = null;

    ServicesApp.prototype.$servicesIll2Img1 = null;
    ServicesApp.prototype.$servicesIll2Img2 = null;
    ServicesApp.prototype.$servicesIll2Img3 = null;

    ServicesApp.prototype.$servicesIll1Img1 = null;
    ServicesApp.prototype.servicesCopyrightShowing = false;

    ServicesApp.prototype.$contentSlider = false;
    ServicesApp.prototype.$contentItems = false;

    ServicesApp.prototype.$hiddenElements = null;


    ServicesApp.prototype.showMe = function(){
        var that = this;
        BaseApp.prototype.showMe.call(that);
        that.$servicesBrandLogo.stop().fadeTo(1000,1);
        that.$hiddenElements.stop().show().fadeTo(1000,1);
    };
    ServicesApp.prototype.hideMe = function(){
        var that = this;
        BaseApp.prototype.hideMe.call(that)
        that.$servicesBrandLogo.stop().fadeTo(500,0);
        that.$hiddenElements.stop().hide().fadeTo(0,0);
    };
    ServicesApp.prototype.align = function(move_ratio, move_position){
        var that = this;
        var topPos = move_position - windowHeight;

        that.currentContentIndex = Math.round(topPos/ServicesApp.servicesMoveDelta);
        setStatus(that.currentContentIndex);

        that.$illustrations.css("marginTop", 50-50*move_ratio-25);
        that.$servicesLeftCopyrighsContainer.css("marginTop", 100-100*move_ratio);
        that.$servicesCopyrighsContainer.css("marginTop", 50-100*move_ratio);

        that.$contentSlider.css("top",  (topPos + ServicesApp.servicesMoveDeltaHalf-300) * (26/ServicesApp.servicesMoveDelta) - 3);

        if(topPos>-150 && that.servicesCopyrightShowing == false){
            that.servicesCopyrightShowing = true;
            that.$servicesCopyrighsContainer.stop().fadeTo(1000, 1);
            //that.$servicesBrandLogo.stop().fadeTo(1500, 1);
        }else if(topPos<-150 && that.servicesCopyrightShowing){
            that.servicesCopyrightShowing = false;
            that.$servicesCopyrighsContainer.stop().fadeTo(200, 0);
            //that.$servicesBrandLogo.stop().fadeTo(200, 0);
        }

        if(that.$servicesIll1.data("visible")){

            var ratio4 = (topPos-ServicesApp.servicesMoveDelta*3) / (ServicesApp.servicesMoveDelta*4-ServicesApp.servicesMoveDelta*3);
            var ratio1 = (topPos) / (ServicesApp.servicesMoveDelta*2-ServicesApp.servicesMoveDelta);

            ratio1 = ratio4 * 0.6;
            //var ratio1 = (topPos+300) / 600;
            ratio1 = 1-Math.min(1, ratio1+0.2);
            //that.$servicesIll1Img1.css("marginTop", -20*ratio1 + 10);
            that.$servicesIll1Imgs.each(function(index){
                $(this).css("left", $(this).data("start-x") + $(this).data("move-x") * ratio1);
                $(this).css("top", $(this).data("start-y") + $(this).data("move-y") * ratio1);
            });



        }

        if(that.$servicesIll2.data("visible")){
            var ratio2 = (topPos-ServicesApp.servicesMoveDelta*1) / (ServicesApp.servicesMoveDelta*2-ServicesApp.servicesMoveDelta*1);
            that.$servicesIll2Img2.css("marginTop", - 400*ratio2 + 200);
            that.$servicesIll2Img3.css("marginTop", - 100*ratio2 + 50);
            that.$servicesIll2Img1.css("marginTop", - 20*ratio2 + 10);
        }

        if(that.$servicesIll3.data("visible")){
            var ratio3 = (topPos-ServicesApp.servicesMoveDelta*2) / (ServicesApp.servicesMoveDelta*3-ServicesApp.servicesMoveDelta*2);
            ratio3 = Math.min(1, ratio3+0.2);
            var move3T = -100 + 100 * ratio3;
            var move3B = 100 - 100 * ratio3;
            var move3L = -100 + 100 * ratio3;
            var move3R = 100 - 100 * ratio3;

            that.$servicesIll3Img0.css("opacity", Math.max(0,ratio3-0.5)/0.5);

            that.$servicesIll3Img1.css("marginTop", move3T);
            that.$servicesIll3Img2.css("marginTop", move3T).css("marginLeft", move3R);
            that.$servicesIll3Img3.css("marginLeft", move3R);
            that.$servicesIll3Img4.css("marginLeft", move3R).css("marginTop", move3B);

            that.$servicesIll3Img5.css("marginTop", move3B);
            that.$servicesIll3Img6.css("marginLeft", move3L).css("marginTop", move3B);
            that.$servicesIll3Img7.css("marginLeft", move3L)
            that.$servicesIll3Img8.css("marginLeft", move3L).css("marginTop", move3T);
        }

        if(that.$servicesIll4.data("visible")){
            var ratio1 = (topPos) / (ServicesApp.servicesMoveDelta*2-ServicesApp.servicesMoveDelta);
            ratio4 = (ratio1 - 0.2) * 1.2;

            that.$servicesIll4Img3.css("marginTop", -50 * ratio4+25);
            that.$servicesIll4Img2.css("marginTop", -20 * ratio4+10);
            that.$servicesIll4Img1.css("marginTop", -50 * ratio4).css("marginLeft", 50 * ratio4);
        }

        if(that.$servicesIll5.data("visible")){
            var ratio5 = (topPos-ServicesApp.servicesMoveDelta*4) / (ServicesApp.servicesMoveDelta*5-ServicesApp.servicesMoveDelta*4);
            that.$servicesIll5Img1.css("marginTop", -50*ratio5);
            //$servicesIll5Img1.css("marginLeft", -25 + 50*ratio5);
            that.$servicesIll5Img2.css("marginTop", 50*ratio5);
            that.$servicesIll5Img2.css("marginLeft", -50*ratio5);
        }

        if(that.$servicesIll6.data("visible")){
            var ratio6 = (topPos-ServicesApp.servicesMoveDelta*5) / (ServicesApp.servicesMoveDelta*7-ServicesApp.servicesMoveDelta*5);
            that.$servicesIll6Img1.css("marginTop", -400*ratio6+100);
            that.$servicesIll6Img2.css("marginTop", -100*ratio6);
        }



        if(topPos>=0 && topPos<ServicesApp.servicesMoveDelta){
                that.switchIll(that.$servicesIll4);
        }else if(topPos>=ServicesApp.servicesMoveDelta && topPos<ServicesApp.servicesMoveDelta*2){
                that.switchIll(that.$servicesIll2);
        }else if(topPos>=ServicesApp.servicesMoveDelta*2 && topPos<ServicesApp.servicesMoveDelta*3){
                that.switchIll(that.$servicesIll3);
        }else if(topPos>=ServicesApp.servicesMoveDelta*3 && topPos<ServicesApp.servicesMoveDelta*4){
                that.switchIll(that.$servicesIll1);
        }else if(topPos>=ServicesApp.servicesMoveDelta*4 && topPos<ServicesApp.servicesMoveDelta*5){
                that.switchIll(that.$servicesIll5);
        }else if(topPos>=ServicesApp.servicesMoveDelta*5 && topPos<ServicesApp.servicesMoveDelta*7){
                that.switchIll(that.$servicesIll6);
        }else{
            that.switchIll(null);
        }
    };
    ServicesApp.prototype.$currentServiceBlock = null;
    ServicesApp.prototype.$currentServiceIll = null;
    ServicesApp.prototype.$oldServiceIll = null;
    ServicesApp.prototype.switchdelayId = null;
    ServicesApp.prototype.switchIll = function(newIll){
        var that = this;
        if(newIll == that.$currentServiceIll) return;
        clearTimeout(that.switchdelayId);

        if(that.$oldServiceIll){
            that.$oldServiceIll.hide();
            that.$oldServiceIll.data("visible", false);
            that.$oldServiceIll = null;
        }

        if(that.$currentServiceIll){
            that.$oldServiceIll = that.$currentServiceIll;
            that.$oldServiceIll.stop().fadeTo(250,0);
            that.$currentServiceIll = null;
        }
        //
        //
        if(newIll) {
            that.$currentServiceIll = newIll;
            that.$currentServiceIll.data("visible", true);
            that.switchdelayId = setTimeout(function(){
                that.$currentServiceIll.stop().fadeTo(250,1).show();

                if(that.$oldServiceIll){
                    that.$oldServiceIll.hide();
                    that.$oldServiceIll.data("visible", false);
                    that.$oldServiceIll = null;
                }
                var ill_id = getId(that.$currentServiceIll.attr("id"));
                if(that.$currentServiceBlock){
                    that.$currentServiceBlock.hide();
                }
                that.$currentServiceBlock = $("#left-copyright-" + ill_id);
                that.$currentServiceBlock.stop().show().
                    fadeTo(0,0).
                    fadeTo(1500,1).
                    css("marginLeft",-25).
                    animate({marginLeft: 0}, {queue: false, easing: 'easeOutExpo', duration: 1000});
            }, 250);
        }else{
            that.$oldServiceIll = null;
            if(that.$currentServiceBlock){
                that.$currentServiceBlock.fadeTo(500,0);
            }
        }

    }
    ServicesApp.prototype.moveDown = function(){
        var that = this;
        if(that.currentContentIndex >=6) return false;
        $("#services-content-" + that.currentContentIndex).click();
        return true;
    }
    ServicesApp.prototype.moveUp = function(){
        var that = this;
        if(that.currentContentIndex <=1) return false;
        $("#services-content-" + (that.currentContentIndex-2)).click();
        return true;
    }
}
//====================SERVICES CLASS================================
//

//
//====================HOME CLASS================================
function HomeApp($section) {
    var that = this;
    BaseApp.call(that, $section);
}
{
    HomeApp.prototype = new BaseApp(inheriting);
    HomeApp.prototype.$aboutBlock =  null;

    HomeApp.prototype.align = function (move_ratio, move_position) {
        var that = this;
        var topPos = move_position - windowHeight;
        var topRatio = topPos/1600;
    };
    HomeApp.prototype.resize = function () {
        var that = this;
        BaseApp.prototype.resize.call(that);
        homeControler.resize();
    };

    HomeApp.prototype.showMe = function(){
        var that = this;
        BaseApp.prototype.showMe.call(that);
    };
    HomeApp.prototype.hideMe = function(){
        var that = this;
        BaseApp.prototype.hideMe.call(that)
    };
}
//====================HOME CLASS================================
//


function KSlider(args){
    var that = this;
    var selectedFilterId = 0;
    var defaultFilterId = 0;
    var moveIndex = 0;
    var positionMoveDelta = args.positionMoveDelta?args.positionMoveDelta:201;
    var prefix = args.prefix?args.prefix:'clients';
    var loadUrl = args.loadUrl?args.loadUrl:"/clients/listingItemsAjax/category.";
    var invalidateFn = args.invalidateFn?args.invalidateFn:null;
    /*
    $("."+prefix+"-select-btn").mouseover(function(event){
        if(getId($(this).attr("id")) == selectedFilterId) return;
        $(".dk-selectable-button", $(this)).addClass("dk-selectable-button-hover");
    });
    $("."+prefix+"-select-btn").mouseout(function(event){
        $(".dk-selectable-button", $(this)).removeClass("dk-selectable-button-hover");
    });
    */
    $("."+prefix+"-select-btn").click(function(event){
        event.preventDefault();
        selectedFilterId = getId($(this).attr("id"));
        that.changeFilter(selectedFilterId);
    });

    $("#"+prefix+"PrevBtn").click(function(event){
        if(moveIndex<=0) return;
        moveIndex-=2;
        checkPosition(true);
    });
    $("#"+prefix+"NextBtn").click(function(event){
        if($("#"+prefix+"-container ul li").length-Math.floor(($("#"+prefix+"-container").width()-50)/positionMoveDelta)<=moveIndex) return;
        moveIndex+=2;
        checkPosition(true);
    });

    invalidateItems(false);
    //functions
    that.changeFilter = function(filterId){
        $("."+prefix+"-select-btn").removeClass("dk-selectable-button-hover dk-selectable-button-selected");
        $("#"+prefix+"-filer-"+filterId).addClass("dk-selectable-button-selected");
        fillItems(filterId);
    }
    function fillItems(filterId){
        moveIndex = 0;
        $("#"+prefix+"Status").html("");
        //$("#"+prefix+"-container").empty().html('<h1 class="soho-light">Įkraunama...</h1>');
        checkArrows();
        $("#"+prefix+"-container").load(loadUrl+filterId, function(response, status, xhr) {
            invalidateItems(true);
        });

    }
    function invalidateItems(animate){
        moveIndex = 0;
        if(animate){
            $("."+prefix+"-item").css("opacity", 0);
            $("."+prefix+"-item").each(function(index) {
                $(this).delay(200 + index*100).fadeTo(500, 1);
            });
        }
        /*
         */
        $("."+prefix+"-item ."+prefix+"-item-over-bg").css("opacity", 0);


        $("#"+prefix+"-container ul").width($("#"+prefix+"-container ul li").length * positionMoveDelta);
        checkArrows();
        checkPosition(false);
        if(invalidateFn){
            invalidateFn.call();
        }
    }
    function checkArrows(){
        $("#"+prefix+"PrevBtn").css("opacity", moveIndex>0?1:0.4);
        $("#"+prefix+"NextBtn").css("opacity",
            $("#"+prefix+"-container ul li").length-Math.floor(($("#"+prefix+"-container").width()-50)/positionMoveDelta)>moveIndex?1:0.4
        );
    }
    function checkPosition(anim){

        if(anim){
            $("#"+prefix+"-container ul").animate({'margin-left':-moveIndex*positionMoveDelta},{queue: false, easing: 'easeOutExpo', duration: 400});
        }else{
            $("#"+prefix+"-container ul").css("margin-left", -moveIndex*positionMoveDelta);
        }
        $("#"+prefix+"Status").html((moveIndex/2 + 1) + " iš  "+(Math.max(0, Math.ceil(($("#"+prefix+"-container ul li").length-Math.floor(($("#"+prefix+"-container").width()-50)/positionMoveDelta))/2))+1) + " puslapių rodomas");
        checkArrows();
    }
}


//====================ContentSlider CLASS================================
//

function ContentSlider(args){
    var that = this;
    that.moveIndex = 0;
    that.selectByIndex = function(index){
        that.moveIndex = index;
        updatePosition();
    }
    
    var $status = args.status?$(args.status):null;
    
    var selector = args.selector;
    var wrap = args.wrap?args.wrap:1;
    
    var useAlpha = args.hasOwnProperty("useAlpha")?args.useAlpha:true;
    var autoplay = args.hasOwnProperty("autoplay")?args.autoplay:false;
    var forceW = args.hasOwnProperty("forceW")?args.forceW:false;
    
    var moveDelta = forceW?forceW:$(selector + " > ul > li").innerWidth();
    
    var onChange = args.onChange?args.onChange:null;
    
    var $liItems = $(selector + " > ul > li");
    
    var total = $liItems.length-wrap;
    $(selector + " > ul").width(moveDelta * $liItems.length);
    

    var $navLeft = $(args.left).click(function(e){
        if(that.moveIndex>0) that.moveIndex = Math.max(0, that.moveIndex-wrap);
        updatePosition();
    });
    var $navRight = $(args.right).click(function(e){
        if(that.moveIndex<total) that.moveIndex = that.moveIndex+wrap;
        updatePosition();
    });
    var $navFirst = args.hasOwnProperty("first")?$(args.first):false;
    if($navFirst){
        $navFirst.click(function(e){
            if(that.moveIndex>0) that.moveIndex=0;
            updatePosition();
        });
    }
    
    var $navLast = args.hasOwnProperty("last")?$(args.last):false;
    if($navLast){
        $navLast.click(function(e){
            if(that.moveIndex<total) that.moveIndex = total;
            updatePosition();
        });
    }
    
    //pasliapiam rodykles, jei ju nereikes visai
    if($liItems.length<=wrap){
        $navRight.hide();
        $navLeft.hide();
        
        if($navLast) $navLast.hide();
        if($navFirst) $navFirst.hide();
        
        if($status) $status.hide();
    }    
    function checkArrows(){
        $navLeft.css("opacity", that.moveIndex>0?1:0.5);
        if($navFirst) $navFirst.css("opacity", that.moveIndex>0?1:0.5);
        
        $navRight.css("opacity", that.moveIndex<total?1:0.5);
        if($navLast) $navLast.css("opacity", that.moveIndex<total?1:0.5);
        
        
    }
    function updatePosition(){
        $(selector + " > ul").animate({'margin-left':-that.moveIndex*moveDelta},{queue: false, easing: 'easeOutExpo', duration: 500});
        checkArrows();
        checkItemsPos();
        if(onChange){   
            onChange.call(null);
        }
        updateStatus();
        if(autoplay){resetAutoplay();}
    }
    function checkItemsPos(){
        
        if(!useAlpha) return;
        $liItems.each(function(index){
            $(this).unbind("click");

            if(index > that.moveIndex+(wrap-1) || index<that.moveIndex){
                $(this).fadeTo(0, 0.5).css("cursor","pointer");
                $(this).bind("click", selectItem);
            }else{
                $(this).fadeTo(0, 1).css("cursor","auto");
            }
        });    
    }
    function selectItem(e){
        e.preventDefault();
        var thisIndex = $(this).index();
        that.moveIndex = (Math.ceil((thisIndex+1)/wrap)-1) * wrap;
        updatePosition();
    }
    function updateStatus(){
        if($status){
            $status.html(Math.ceil((that.moveIndex+1)/wrap) + " of " + Math.ceil((total+wrap)/wrap));
        }    
    }
    checkArrows();
    checkItemsPos();
    updateStatus();
    
    
    var autoplayIntId;
    var autoplayDelay = 8000;
    var autoplayDirection = 1;
    function resetAutoplay(){
        clearTimeout(autoplayIntId);
        autoplayIntId = setTimeout(runAutoPlay, autoplayDelay);
    }
    function runAutoPlay(){
        if(autoplayDirection>0){
            $navRight.click();
            if(that.moveIndex>=total){
                autoplayDirection = -1;
            }
        }else{
            $navLeft.click();
            if(that.moveIndex<=0){
                autoplayDirection = 1;
            }
        }
    }
    if(autoplay){resetAutoplay();}
}