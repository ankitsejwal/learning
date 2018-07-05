function process(){
    value = document.getElementById('textbox').value;
    document.getElementById('target').innerHTML = value;
}

function increaseQuantity(){
    orderQuantity = document.getElementById('order-quantity')
    currentValue = orderQuantity.value;
    currentValue++;
    orderQuantity.value = currentValue;
}

function decreaseQuantity(){
    orderQuantity = document.getElementById('order-quantity')
    currentValue = orderQuantity.value;
    if (currentValue > 0) {
        currentValue--;
        orderQuantity.value = currentValue;
    }
}