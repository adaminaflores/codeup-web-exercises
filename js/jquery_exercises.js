"use strict";

// $('h1').ready(function() {
//     alert( 'Hello There!' );
// });
// $('.codeup').css('border', '1px solid red');
// $('li').css('font-size', '20px');
// $('h1 , li, p').css('background-color','yellow');

//.click() function using jQuery
$('#main-heading').click(function(){
    $(this).css('background-color', 'green').css('font-size', '50px').css('font-weight','bold');
    });
//.dblclick() function using jQuery
$('p').dblclick(function(){
    $(this).css('font-size', '40px').css('color','blue').css('font-family','helvetica')
});
//.hover(handlerIn, handlerOut) function using jQuery
$('li').hover(function(){
    $(this).css('color','red').css('font-size','30px');
    },
    function(){
    $(this).css('color', 'black').css('font-size','inherit');
    }
);
//Extra stuff for fun
$('.paragraph').hover(function(){
    $(this).css('font-family','italic').css('font-size','30px').css('color', 'yellow');
},
    function(){
    $(this).css('font-family','inherit').css('font-size','inherit').css('color','black')
});
$('h1').css('padding','50px').css('margin','50px');

//keydown
// $('body').keydown(function(event){
//     console.log(event.key);
// });
//keypress
// $('body').keypress(function(event){
//    console.log(event.key)
// });

var myKeys= "";

$('body').keyup(function(event){
    console.log("The key you pressed was "+ event.key);
    myKeys += event.key;
    console.log(myKeys);
    if(myKeys === "quasar"){
        alert("hey you did it!")
    }
});