var settings = getData();

function getData(){
    var json = null;

    $.ajax({
        async: false,
        url: "settings.json",
        dataType: "json",
        cache: false,
        success: function(data){
            json = data;
        }
    });
    return json;
}

console.log(settings.credentials.regular_login.username)