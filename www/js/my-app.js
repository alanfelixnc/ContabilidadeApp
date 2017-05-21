// Initialize app
var myApp = new Framework7({
	swipePanel: 'left'
});


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Dispositivo pronto!");
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('add-desp', function (page) {
	
	var vencBox = document.getElementById('desp-vencimento-area');
	vencBox = vencBox.getElementsByTagName('input')[0];
	vencBox.onchange = showVencimento;
	
});