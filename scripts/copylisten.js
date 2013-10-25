function onCopy(e) {
    chrome.extension.sendRequest({event: "copy"});
}

document.addEventListener("copy", onCopy, true);

function onCut(e) {
    chrome.extension.sendRequest({event: "copy"});
}

document.addEventListener("cut", onCut, true);
