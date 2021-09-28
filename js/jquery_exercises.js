"use strict";

// $('h1').ready(function() {
//     alert( 'Hello There!' );
// });
// $('.codeup').css('border', '1px solid red');
// $('li').css('font-size', '20px');
// $('h1 , li, p').css('background-color','yellow');

//.click() function using jQuery
$('#main-heading').click(function(){
    $(this).css('background-color', 'blue');
    });
//.dblclick() function using jQuery
$('p').dblclick(function(){
    $(this).css('font-size', '18px')
});
//.hover(handlerIn, handlerOut) function using jQuery
$('li').hover(function(){
    $(this).css('color','red');
    },
    function(){
    $(this).css('color', 'black');
    }
);