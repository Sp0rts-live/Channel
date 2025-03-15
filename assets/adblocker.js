// Say Hi to Adblock
function downloadJSAtOnload() {
    var script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/gh/Arlina-Design/quasar@master/arlinablock.js";
    document.body.appendChild(script);
}

// Add event listener for window load event
if (window.addEventListener) {
    window.addEventListener("load", downloadJSAtOnload, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", downloadJSAtOnload);
} else {
    window.onload = downloadJSAtOnload;
}
