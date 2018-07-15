// reverse a string

let string = 'apple';
let reversedString = '';

for (let x = string.length - 1; x >= 0; x--)
    reversedString += string[x];

console.log(reversedString);