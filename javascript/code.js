function func(){

    var paragraphs = document.getElementsByClassName('para');
    
    firstPara = paragraphs[0].innerHTML;
    secondPara = paragraphs[1].innerHTML;

    thirdPara = paragraphs[2].innerHTML = firstPara + secondPara 

}