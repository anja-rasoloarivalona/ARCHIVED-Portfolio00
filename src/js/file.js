

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
    } else {
        a.reverse();
        b.reverse();
        show = false;
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





