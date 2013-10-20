var clipboardList = [];
var currentIndex = 0, notificationID = -1;
var showNotification = function(displayText){
    if(notificationID !== -1){
        //clear previous notification
    }
    var notify = webkitNotifications.createNotification(
        'icon.png',
        'New clipboard data:',
        displayText
    );
    notify.show();
    setTimeout(function () {
        notify.close();
    }, 2000);
}

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
        showNotification(Clipboard.paste());
    }else if(command === "forward") {
        if(currentIndex < clipboardList.length - 1){
            currentIndex += 1;
        }
        Clipboard.copy(clipboardList[currentIndex]);
        showNotification(Clipboard.paste());
    }
});
