var clipboardList = [];
var currentIndex;

chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        if (request.event == "copy") {
            //Handle the clipboard data here
            clipboardList.push(Clipboard.paste());
            currentIndex = clipboadList.length - 1;
        }
        sendResponse({});
});
