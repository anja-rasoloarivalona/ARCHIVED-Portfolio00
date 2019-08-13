

var width = $(document).width();


/* Load page from the top */
$(window).on('beforeunload', function(){
    $(window).scrollTop(0);
});


/*The animation of the sidebar will depend on the width of the screen*/

var isSidebarAnimated;
var showSideBar;

/* STEP 1 of animation : loading */
if(width > 900){
    isSidebarAnimated = 0
} else {
    isSidebarAnimated = '-100%';
}


$(window).on('load', function(){
    var loader = new TimelineMax({repeat:0})
    loader
    .to('.loader', 1, {autoAlpha: 0},'+=3')
    .to('.home', 1, {y:0, opacity: 1})
    .to('.sidebar', 1, {x: isSidebarAnimated},'-=.5')
    .to('.home__layer', 1, {opacity: 1})
    .to('.about', .2, {opacity: 1},'-=.7')
    .to('.sidebar__toggle', .5, {opacity: 1},'-=.5')
    .to('html', .3, {overflowY: 'scroll'},'-=.5')
})




/* STEP 2 of animation : behavior */


if(width > 900){
    showSideBar = 0
} else {
    showSideBar= '0%';
}

 var a = new TimelineMax
        a
        .to('.sidebar__toggle--1', .4, {rotation: 135, position:'absolute', top: '1rem',ease: Power2.easeOut})
        .to('.sidebar__toggle--3', .4, {rotation: -135, position:'absolute', top: '1rem', ease: Power2.easeOut},'-=.4')  
        .to('.sidebar', .4, {x: showSideBar}, '-=.4')
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

