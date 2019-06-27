

var a = new TimelineMax
        a
        .to('.sidebar__toggle--1', .4, {rotation: 135, position:'absolute', top: '1rem',ease: Power2.easeOut})
        .to('.sidebar__toggle--3', .4, {rotation: -135, position:'absolute', top: '1rem', ease: Power2.easeOut},'-=.4')  
        .to('.sidebar', .4, {x: '0'}, '-=.4')
        .stop()

var b = new TimelineMax
        b
     .to('.sidebar__toggle--2', .4, {opacity: 0, scale: 0})
     .stop()

 var show = false;



$('.sidebar__toggle').on('click', function(){
    
    if(show === false) {
        a.play();
        b.play()
        show = true;
            var c = new TimelineMax
            c
                .to('html', .4, {overflowY: 'hidden'});


                $('.sidebar__list__item').on('click', function(){
                    a.reverse();
                    b.reverse();
                    show = false;
                    var d = new TimelineMax
                        d
                            .to('html', .4, {overflowY: 'scroll'})
                            })
                        
        
 
    } else {
        a.reverse();
        b.reverse();
        show = false;
        var c = new TimelineMax
            c
                .to('html', .4, {overflowY: 'scroll'})
    }
   
})




$(function() {
    $(".sidebar__list__item").click(function() {
       // remove classes from all
       $(".sidebar__list li").removeClass("sidebar__active");
       // add class to the one we clicked
       $(this).addClass("sidebar__active");

       
    });
 });

 var width = $(document).width();
 console.log(width);

if(width > 681) {
    var writer = new TimelineMax({repeat:-1, repeatDelay: 1.5});
    //set d
    writer
   
    .to('.home__title__writer', 1.5, {x: -372},'+=2')
    .to('.home__title__hide', 1.5, {x: 8},'-=1.5')
    .to('.home__title', 1.5, {x: '20%'},'-=1.5')
    .to('.home__title--2', .2, {opacity: 1})
    
    .to('.home__title--1', .2, {opacity: 0})
    .to('.home__title__writer', 1.5, {x: -50})
    .to('.home__title__hide', 1.5, {x: 330},'-=1.5')
    .to('.home__title', 1.5, {x: '0%'},'-=1.5')
   
    .to('.home__title__writer', 1.5, {x: -370},'+=3')
    .to('.home__title__hide', 1.5, {x: 10},'-=1.5')
    .to('.home__title', 1.5, {x: '20%'},'-=1.5')
   
    .to('.home__title--2', .2, {opacity: 0})
    .to('.home__title--1', .2, {opacity: 1})
    .to('.home__title__writer', 1.5, {x: -5})
    .to('.home__title__hide', 1.5, {x: 372},'-=1.5')
    .to('.home__title', 1.5, {x: '0%'},'-=1.5')   

} 











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




 