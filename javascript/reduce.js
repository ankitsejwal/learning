const numbers = [1, 2, 1, -2, 5]

const total = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
); 

console.log(total);