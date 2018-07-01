const numbers = [-1, 0 , 1, 2, 3];

// filter
const positiveNumbers = numbers.filter(v => v >= 0 );

// map
const items = positiveNumbers.map(n => `<li>${n}</li>`)

// sandwitch it between ul tags
const html = `<ul>${items.join('')}</ul>`
console.log(html)

// chaining methods
const items2 = numbers
    .filter(n => n >=0 )
    .map(n => ({value: n}));

console.log(items2)