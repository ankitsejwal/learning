const circle = {
    radius: 3,
    color: 'red',
    draw(){
        console.log('Draw');
    }
}

for (let key in circle){
    console.log(key, circle[key]);
}
name = 'ankit ji';

for (let word in name) {
    console.log(name[word]);
}