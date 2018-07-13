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
    const usd = 68;
    const result = inr/usd;
    document.getElementById('result').innerHTML = result;
}

