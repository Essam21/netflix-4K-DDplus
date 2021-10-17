chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {
            redirectUrl: chrome.runtime.getURL("cadmium-playercore-6.0032.282.911.js")
        };
    }, {
        urls: [
            "*://assets.nflxext.com/*/ffe/player/html/*",
            "*://www.assets.nflxext.com/*/ffe/player/html/*"
        ]
    }, ["blocking"]
);
