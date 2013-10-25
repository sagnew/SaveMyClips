function onCopy(e) {
    chrome.extension.sendRequest({event: "copy"});
}

document.addEventListener("copy",onCopy,true);
