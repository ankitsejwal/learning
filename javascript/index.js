const person = {
    name: 'John',
    age: 30,
    get pName() {
        return this.name;
    }
}

person.name = 'Mary';
person['name'] = 'Krishna';

console.log(person.pName());
