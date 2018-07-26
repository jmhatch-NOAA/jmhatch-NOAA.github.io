(function() {
    
////////////////////////////////////////////
// CONFIGURE THESE TO MATCH YOUR USE CASE //
////////////////////////////////////////////

    // this should be the root URL of the child frame (Shiny app) which you want
    // to allow to send messages to the parent
    var allowedOrigin = "https://psb-turtle.shinyapps.io"

///////////////////////
// END CONFIGURATION //
///////////////////////

    var embeddedApp = document.getElementById("embedded-app");

    function resizeIframe(pixels) {
        embeddedApp.style.height = pixels + "px";
    }

    // cross-browser compatible infrastructure
    var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    var eventer = window[eventMethod];
    var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

    // listen to message from iframe
    eventer(messageEvent, function(e) {
        if (e.origin === allowedOrigin) {
            var key = e.message ? "message" : "data";
            var data = e[key];
            resizeIframe(data);
        } else {
            console.log("Was expecting a message from " + allowedOrigin + ", got " + e.origin + " instead.");
        }
    }, false);

    // send message to iframe on window resize
    window.onresize = function() {
        embeddedApp.contentWindow.postMessage("parentWindowResized", "*");
    };
    
})();
