chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        if (request.event == "copy") {
            //Handle the clipboard data here
        }
        sendResponse({});
});
