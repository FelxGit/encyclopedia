
window.onload=function(){
var x = document.getElementsByName("contents");
var y = document.getElementsByClassName("drop-wrap");
var z = document.getElementById("fold");
var a = window.matchMedia("(max-width: 550spx)");
    
x[0].addEventListener("mouseover", myFunction);
z.addEventListener("click", myFunction2);

    function myFunction(){
      
           y[0].style.display = "block";
       
    }
    function myFunction2(){
       if(y[0].style.display == "none"){
           y[0].style.display = "block";
       }
        else{
               y[0].style.display = "none";
        }
    }
    
}
