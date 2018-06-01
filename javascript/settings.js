
var settingsJson = getData();
console.log(settingsJson.credentials.regular_login.username);

var password = document.getElementById("username");
password.innerHTML = "Hi there chutiya";

document.getElementById('username').innerHTML = settingsJson.credentials.regular_login.username;
document.getElementById('password').innerHTML = settingsJson.credentials.regular_login.password;

function getData(){
    var json;
    $.ajax({
        async: false,
        url: "settings.json",
        cache: false,
        dataType: "json",
        success: function(data){
            json = data;
        }
    });
    return json;
}