const person = {
    name: 'John',
    walk(km){
        console.log('He walks '+ km + ' km every day')
    },
    speak(){
        console.log('He can speak too')
    }
}

const targetMember = 'name'
person[targetMember.value] = 'shamitabh'

personName = person.name
console.log(personName)
person.walk(6)
person.speak()