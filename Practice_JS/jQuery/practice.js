
// NORMAL WAY
const body = document.querySelector("body");
const newdiv = document.createElement("h1");
const text = document.createTextNode("Bye World");
newdiv.append(text);
body.append(newdiv);


// USING JQUERY
$('body').append("<h1>Bye World</h1>");