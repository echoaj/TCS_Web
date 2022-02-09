
console.log("-----")
const jsonData= require('data.json'); 
console.log(jsonData);
console.log("----")
// var mydata = JSON.parse(data);
// alert(mydata[0].name);
$.getJSON("data.json", function(json) {
    console.log(json); // this will show the info it in firebug console
});

