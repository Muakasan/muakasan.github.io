//disables default key presses
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 38, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

// handles key presses to move page
$(document).keydown(function(e){
	switch(e.which){
		//up arrow
		case 38:
			window.location = '#frame' + (parseInt(
				document.querySelectorAll(
				"div:hover.frame")[0].id.substring(5))-1);
			break;
		//down or space
		case 32:
		case 40:
			window.location = '#frame' + (parseInt(
				document.querySelectorAll(
				"div:hover.frame")[0].id.substring(5))+1);
			break;
	}
});