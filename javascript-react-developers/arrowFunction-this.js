// Old way to inherit this

// const person = {
//     talk(){
//         var self = this
//         setTimeout(function(){console.log('self', self)}, 1000);
//     }
// }

// New way: arrow function inherits this by default
const person = {
    talk(){
        var self = this
        setTimeout(() => console.log('self', this), 1000);
    }
}

person.talk()