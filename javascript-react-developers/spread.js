// combining arrays
const first = [1, 2, 3];
const second = [4, 5, 6];

// old way
const oldCombined = first.concat(second)

// using spread method
const combined = [...first, 'a', ...second]


// combining objects
const name = {'name': 'Mosh'}
const phone = {'phone': 0342030232}

const employee = {...name, ...phone, address: 'Australia'}
console.log(employee)