(function(){
    var x = 5;
    try{
        window.x = x;   // for testing in browser
    }catch{
        global.x = x;   // for testing in node
    }
})();

console.log(x);