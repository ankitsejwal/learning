const colors = ['Red', 'Green', 'Blue']

// Without arrow function ->
// const items = colors.map(function(color){
//     return console.log(color)
// });

// Rendering list with map, arrow function and string literalls
const items = colors.map(color => `<li>${color}</li>`);
console.log(items)