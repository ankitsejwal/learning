import {Person} from "./person";

export default class Teacher extends Person{
    constructor(name, degree){
        super(name);
        this.degree = degree;
    }

    qualification(){
        console.log(`${this.name} is ${this.degree}`)
    }
}