// Factory function
function createCircle(radius) {
    return {
        radius,
        draw: function(){
            console.log(`Draw circle with radius ${radius}`);
        }
    }
}

const circle = createCircle(1);
circle.draw();