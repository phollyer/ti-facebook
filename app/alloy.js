// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

var facebook = require('facebook');
facebook.permissions = ['user_friends', 'user_birthday', 'email'];
facebook.forceDialogAuth = true;
	
facebook.addEventListener('login',function(e) {
	if (e.success) {
		alert('signed in');
		
	} else if (e.error) {
		alert(e.error);
		
	} else if (e.cancelled) {
		// do nothing: user cancelled the facebook signup so we remain on the sign in options screen
	}
});
