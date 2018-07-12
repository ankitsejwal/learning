// Your code here

class Point{
	constructor(x, y){
        this.x = x;
        this.y = y;
    }

    plus(newPoint){
        const newX = this.x + newPoint.x;
        const newY = this.y + newPoint.y;
        return newX, newY;
    }
}

console.log(new Point(1, 2).plus(new Point(2, 1)))
// → Point{x: 3, y: 3}

