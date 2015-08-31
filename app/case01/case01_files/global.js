// JavaScript Document
var structure = {
	0: {
		container: "home",
        path: "",
		color: "#eeeee"
	},	
	1: {
		container: "about",
        path: "about",
		color: "#ee3a6b"
	},
	2: {
		container: "services",
        path: "services",
		color: "#e34179"
	},
	3: {
		container: "platforms",
        path: "platforms",
		color: "#d34f91"
	},
	4: {
		container: "casestudies",
        path: "casestudies",
		color: "#bc4a99"
	},
	5: {
		container: "team",
        path: "team",
		color: "#a769b1"
	},
	6:{
		container: "clients",
        path: "clients",
		color: "#7d63b0"
	},
	7:{
		container: "contacts",
        path: "contacts",
		color: "#327fbd"
	}
}

var $window = $(window);
var windowHeight = $window.height();
var windowWidth = $window.width();
var cornerW = 271;
var cornerH = 429;
var cornerA = 32;
var contentH = 1600;
var parallaxContentY = (contentH - windowHeight)/2;
var homeHRatio = 1.2;

var screenSizeRatio = 1;

function setStatus(){
    var stat = 's: ';
    for(var k in arguments){
        stat += ", " + arguments[k];
    }
	var $status = $('#status');
	$status.html(stat);
}
function getId(string_id){
	return string_id.split("-").pop();
}
function getHash(){
    return window.location.hash.substring(1);
}
var setHashDelayId;
function setHash(value){
    return;
    if(jQuery.browser.opera || jQuery.browser.safari){
        clearTimeout(setHashDelayId);
        setHashDelayId = setTimeout("delay_setHash('"+value+"')", 1500);
    }else{
        window.location.hash = value;
    }
}
function delay_setHash(value){
    window.location.hash = value;
}

var messageTimeoutId;
$(function(){
    $("#alert-container > div.text-box > a.alert-close-btn").click(function(e){
        e.preventDefault();
        hideMessage();
    });   
})
function showMessage(text, timeout){
    $("#alert-container > div.text-box div.message").html(text);
    $("#alert-container").fadeIn("fast");
    messageTimeoutId = setTimeout('hideMessage()', timeout);
}
function hideMessage(){
    clearTimeout(messageTimeoutId);
    $("#alert-container").fadeOut("fast");
}