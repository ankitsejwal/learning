// defining objects using object literal

const circle = {
    radius: 1.5,
    location: {
        x: 1,
        y: 1
    },
    draw : function() {
        console.log('draw');
    }
}

circle.draw()

// Factory function

function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log('draw')
        }
    };
}

const circle1 = createCircle(1);

// classes

class Circle{
    constructor(radius){
        this.radius = radius;
    }
    draw(){
        console.log(`This circle's radius is ${this.radius} `);
    }
    getRadius(){
        return this.radius;
    }

    setRadius(radius){
        this.radius = radius;
    }
}

const circle3 = new Circle(2);
circle3.setRadius(5);
circle3.draw();