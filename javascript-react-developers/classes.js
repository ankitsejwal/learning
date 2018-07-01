class Person{
    constructor(name){
        this.name = name;
    }

    walk(){
        console.log(`${this.name} is walking`);
    }
}

class Teacher extends Person{
    constructor(name, degree){
        super(name);
        this.degree = degree;
    }

    qualification(){
        console.log(`${this.name} is ${this.degree}`)
    }
}

const john = new Person('John');
john.walk();

const teacher = new Teacher('Walker', 'MSc');
teacher.qualification();