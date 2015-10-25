//disables default key presses
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 38, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);



function getFrameNumber(frame){
	return parseInt(frame.attr('id').substring(5));
}

function getCurrentFrame(){
	return $("div[id^='frame']:in-viewport").one();
}

function getFrame(frameNumber){
	return $('#frame' + frameNumber);
}

function goToFrame(frameNumber){
	$(window).scrollTo(getFrame(frameNumber), 200);
}

function goToNextFrame(){
	goToFrame(getFrameNumber(getCurrentFrame())+1);	
}

function goToPreviousFrame(){
	goToFrame(getFrameNumber(getCurrentFrame())-1);
}

// handles key presses to move page
$(document).keydown(function(e){
	switch(e.which){
		//up arrow
		case 38:
			goToPreviousFrame();
			break;
		//down or space
		case 32:
		case 40:
			goToNextFrame();
			break;
	}
});

//handles on screen arrows
$(".arrow-down").click(function (){
	goToNextFrame();
});

//handles on screen arrows
$(".arrow-up").click(function (){
	goToPreviousFrame();
});

$('.link-span').click(function(){
	goToFrame(parseInt($(this).attr('data-frame-number')));
});