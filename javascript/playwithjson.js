var setting = require('settings.json');
console.log(setting);
var car = {
    "tyre": "4",
    "model": "2018",
    "name": "alto"
}

var stringcar = '{\
    "tyre": "4",\
    "model": "2018",\
    "name": "alto"\
}';

var convertstringcar = JSON.parse(stringcar);

console.log(car);
console.log(stringcar);
console.log(convertstringcar);