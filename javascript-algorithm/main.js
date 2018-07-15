// factorize algorithm

function factorize(number) {
    var total = 1;
    if(number === 0){
        return 1;
    }
    for(let x = number; x > 0; x--) {
        total *= x;
    }
    return total;
}

console.log(factorize(5));