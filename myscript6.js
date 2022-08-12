var one = document.querySelector("#one")
var two = document.querySelector("#two")
var three = document.querySelector("#three")

one.addEventListener("mouseover",function(){
    one.textContent="Mouse Over me";
    one.style.color="blue";
})

one.addEventListener("mouseout",function(){
    one.textContent="Hover Over Me!";
    one.style.color="black";
})

two.addEventListener("click",function(){
    
    a=document.querySelector(".link")
    alert(a)

})
