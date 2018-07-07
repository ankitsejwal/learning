function process(){
    value = document.getElementById('textbox').value;
    document.getElementById('target').innerHTML = value;
}

function increaseQuantity(selection){
    orderQuantity = document.getElementById(selection)
    currentValue = orderQuantity.value;
    currentValue++;
    orderQuantity.value = currentValue;
}

function decreaseQuantity(selection){
    orderQuantity = document.getElementById(selection)
    currentValue = orderQuantity.value;
    if (currentValue > 0) {
        currentValue--;
        orderQuantity.value = currentValue;
    }
}