// ES6 sandbox exercise

class Speaker{
    constructor(name, verb){
        this.name = name;
        this.verb = verb || 'says';
    }
}

class Shouter{
    speak(text){
        console.log(`${this.name} ${this.verb} ${text}`)
    }
}

const convert = () => {
    const inr = document.getElementById('rupees').value;
    // 1 usd equals to 68 INR
    const crore = 10000000;
    const million = 1000000;
    const billion = 1000000000;
    const usd = 68;
    const result = Math.round((inr*crore)/usd).toString();
    let answer = '';
    if (result.length >= billion.toString().length){
        answer = `$${result.substr(0, result.length - 9 )} billion`;
    }
    else if (result.length >= million.toString().length) {
        answer = `$${result.substr(0, result.length - 6 )} million`;
    }
    console.log(Math.round(inr * crore));
    console.log(result);
    document.getElementById('result').innerHTML = answer;
}

function process(){
    value = document.getElementById('rupees').value;
    console.log(value);
    document.getElementById('target').innerHTML = `${value} crore`;
}