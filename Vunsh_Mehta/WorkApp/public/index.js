var mainApp = {};

var firebase = app_fireBase;
var uid = null;

firebase.auth().onAuthStateChanged(function (user) {

    if (user) {
        // User is signed in.
        uid = user.uid;
    } else {
        // No user is signed in.
        uid = null;
        window.location.replace("login");
    }

});

function logOut() {
    firebase.auth().signOut();
}

mainApp.logOut = logOut;