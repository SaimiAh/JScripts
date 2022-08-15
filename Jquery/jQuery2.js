$('h1').click(function(){
    console.log("I Am Clicked")
    
})
$('li').dblclick(function(){
    console.log("One of list are being clicked")
    
})

$('li').eq(0).mouseenter(function(){
    $(this).toggleClass('turnBlue').fadeOut(3000)
   
})
    var x = $('h3');
    console.log(x)
x.click(function(){
    x.toggleClass('turnBlue').slideUp(5000)
    
})