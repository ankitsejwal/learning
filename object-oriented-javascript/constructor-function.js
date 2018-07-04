// Constructor function
function CreateCircle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log('Draw');
    }
}

const circle = new CreateCircle(2);
circle.draw();