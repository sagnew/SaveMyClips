var clipboardList = chrome.extension.getBackgroundPage().clipboardList;
var i, textArea, br;
var container = document.getElementById("display");


var addSpace = function (height){
    var space = document.createElement('div');
    space.style.height = height;
    space.style.clear = "both";
    document.getElementsByTagName("body")[0].appendChild(space);
}

for(i = 0; i < clipboardList.length; i += 1){
    textArea = document.createElement("textarea");
    textArea.style.position = "absolute";
    textArea.value = clipboardList[i];
    container.appendChild(textArea);
    br = document.createElement('br');
    container.appendChild(br);
    addSpace("100px");
}
