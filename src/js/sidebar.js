$(function() {
    $(".sidebar__list__item").click(function() {
       // remove classes from all
       $(".sidebar__list li").removeClass("sidebar__active");
       // add class to the one we clicked
       $(this).addClass("sidebar__active");

       
    });
 });



 /*Management of active class on scroll*/


 $(document).on('scroll', function() {    
    var scroll = $(window).scrollTop();
    var home = $('#home').position();
    var homePos = home.top;
    if(scroll > homePos ){
    $(".sidebar__list li").removeClass("sidebar__active");
    $(".sidebar__list li.sidebar__list__item--home").addClass("sidebar__active");
    } 
})





$(document).on('scroll', function() {    
    var scroll = $(window).scrollTop();
    var about = $('#about').position();
    var aboutPos = about.top;
    if(scroll > (aboutPos - 200) ){
    $(".sidebar__list li").removeClass("sidebar__active");
    $(".sidebar__list li.sidebar__list__item--about").addClass("sidebar__active");
    } 
})

$(document).on('scroll', function() { 
    
    var scroll = $(window).scrollTop();
    var portfolio = $('#portfolio').position();
    var portfolioPos = portfolio.top;
    if(scroll > (portfolioPos - 300 )) {
    $(".sidebar__list li").removeClass("sidebar__active");
    $(".sidebar__list li.sidebar__list__item--portfolio").addClass("sidebar__active");
    } 
})

$(document).on('scroll', function() { 
    
    var scroll = $(window).scrollTop();
    var skills = $('#skills').position();
    var skillsPos = skills.top; 
    if(scroll > (skillsPos - 300) ){
    $(".sidebar__list li").removeClass("sidebar__active");
    $(".sidebar__list li.sidebar__list__item--skills").addClass("sidebar__active");
    } 
})


$(document).on('scroll', function() { 
    
    var scroll = $(window).scrollTop();
    var contact = $('#contact').position();
    var contactPos = contact.top;
    if(scroll > (contactPos - 300) ){
    $(".sidebar__list li").removeClass("sidebar__active");
    $(".sidebar__list li.sidebar__list__item--contact").addClass("sidebar__active");
    } 
}) 

