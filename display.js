var clipboardList = chrome.extension.getBackgroundPage().clipboardList;
var i, textArea;
var container = document.getElementById("display");

for(i = 0; i < clipboardList.length; i += 1){
    textArea = document.createElement("textarea");
    textArea.style.position = "absolute";
    textArea.value = clipboardList[i];
    container.appendChild(textArea);
}


