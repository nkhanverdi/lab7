'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.likeBtn').click(buttonClicked);
	// your code here
}

function buttonClicked(e) {
	// create action
	e.preventDefault();
	ga('create', 'UA-114626968-1', 'auto');
	ga('send', 'event', 'like', 'click');
}