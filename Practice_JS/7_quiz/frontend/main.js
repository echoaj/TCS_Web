
function func() {

    // create ajax object
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://127.0.0.1:5501/');

    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log(this.responseText);
        }
    };
    xhr.send();

}