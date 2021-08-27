
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


/*      Enter button        */
// submitButton.addEventListener('keypress', function(event) {
//     if (event.code === 'Enter')
//     {
//         event.preventDefault();
//         var listItem = document.createElement('li');
//         var userInput = textField.value;
//         listItem.append(userInput);
//         ulist.appendChild(listItem);
//     }
// });

