
// Vars
var timer;
var scrollSpeed = 1;


// Scroller
function scroll() {

	// Get current scroll position
	var pos = document.documentElement.scrollTop || document.body.scrollTop || 0;

	// Increase position
	pos += scrollSpeed;

	// Set new position
	(document.documentElement || document.body).scrollTop = pos;

	// Check if we're near the bottom and can stop
	if (pos >= document.body.scrollHeight - window.innerHeight - 5) {
		clearInterval(timer);
		timer = null;
	}

}

var tmr;
function delay() {
	clearInterval(tmr);
	tmr = null;
	
	// Add cancel listeners
	touchLayer.addEventListener("touchstart", cancel, true);
	touchLayer.addEventListener("mousedown", cancel, true);
	
	timer = setInterval(scroll, 12);
}

// wait a while
tmr = setTimeout(delay, 8000);

// Start scrolling


// Add touch overlay div
var touchLayer = document.createElement("div");
touchLayer.style.cssText = "display: block; position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; background: none; z-index: 999999; ";
document.body.appendChild(touchLayer);

// Scroll canceller
function cancel(e) {

	// Remove touch layer
	touchLayer.parentNode && touchLayer.parentNode.removeChild(touchLayer);

	clearTimeout(tmr);
	tmr = null;
	
	// Ignore if cleared already
	if (!timer)
		return;

	// Cancel the scrolling
	clearInterval(timer);
	timer = null;

}


