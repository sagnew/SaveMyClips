var clipboardList = [];
var currentIndex = 0;

chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        if (request.event == "copy") {
            clipboardList.push(Clipboard.paste());
            currentIndex = clipboardList.length - 1;
        }
        sendResponse({});
});

chrome.commands.onCommand.addListener(function(command) {
    if(command === "back") {
        if(currentIndex > 0){
            currentIndex -= 1;
        }
        Clipboard.copy(clipboardList[currentIndex]);
    }else if(command === "forward") {
        if(currentIndex < clipboardList.length - 1){
            currentIndex += 1;
        }
        Clipboard.copy(clipboardList[currentIndex]);
    }
});
