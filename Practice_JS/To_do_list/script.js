
var submitButton = document.getElementById("enterButton");
var textField = document.getElementById("textInput");
var ulist = document.getElementById('uList');


function action(){
    var listItem = document.createElement('li');
    var userInput = textField.value;
    listItem.append(userInput);
    ulist.appendChild(listItem);
}

submitButton.addEventListener('click', action);

