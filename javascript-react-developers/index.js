const person = {
    name: 'John',
    walk(km){
        console.log('He walks '+ km + ' km every day')
    },
    speak(){
        console.log('He can speak too')
    }
}

person.walk(6)
person.speak()