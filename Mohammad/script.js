

let array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

let word = ["hello", "dian", "we"]

function action(){
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    console.log(text)
}


const b1 = document.getElementById("b1")

b1.addEventListener("click", action, false)