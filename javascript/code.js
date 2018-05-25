function changeStyle(){

    var paragraphs =  document.getElementsByClassName('para') ;
    
    for ( var i=0; i < paragraphs.length; i++){
        paragraphs[i].style.color = "blue";
    }
  
}