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

const circle = createCircle(1);