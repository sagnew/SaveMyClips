var clipboardList = [Clipboard.paste()];
var currentIndex = 0, notificationID = -1;

var showNotification = function(displayText){
    if(notificationID !== -1){
        //clear previous notification
    }
    var notify = webkitNotifications.createNotification(
        '',
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
            setTimeout(function () {
                clipboardList.push(Clipboard.paste());
                currentIndex = clipboardList.length - 1;
            }, 100);
        }
        sendResponse({});
});

chrome.commands.onCommand.addListener(function(command) {
    if(command === "back") {
        if(currentIndex > 0){
            currentIndex -= 1;
        }
        if(clipboardList.length > 0){
            Clipboard.copy(clipboardList[currentIndex]);
            showNotification(Clipboard.paste());
        }
    }else if(command === "forward") {
        if(currentIndex < clipboardList.length - 1){
            currentIndex += 1;
        }
        if(clipboardList.length > 0){
            Clipboard.copy(clipboardList[currentIndex]);
            showNotification(Clipboard.paste());
        }
    }
});
