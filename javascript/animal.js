class Animal{
    constructor(name, species, legs){
        this.name = name;
        this.species = species;
        this.legs = legs;
    }

    walks(){
        console.log(`${this.name} walks on ${this.legs} legs`)
    }

    get print(){
        console.log(`name: ${this.name}, species: ${this.species}, legs: ${this.legs}`);
    }
}

const jack = new Animal('Jack', 'dog', 4);
jack.print();