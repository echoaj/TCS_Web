
function validate()
{

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username.length < 5){
        rules("user")
    }

    if(username == "admin" && password=="user")
    {
        alert("login successfull");
    }
    else
    {
        alert("login failed");
    }
}

function rules(type){
    if(type == "user"){
        alert("Username must be at least 5 characters long.")
    }
}