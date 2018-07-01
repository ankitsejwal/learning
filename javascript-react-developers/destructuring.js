const address = {
    street: '',
    city: '',
    country: ''
}

const street = address.street;
const city = address.street;
const country = address.country;

// Destructuring
const { street, city, country } = address;

// setting alias
const { street: st} = address;