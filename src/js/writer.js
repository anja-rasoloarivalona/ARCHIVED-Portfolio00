var width = $(document).width();

if(width > 681) {
    var writer = new TimelineMax({repeat:-1, repeatDelay: 1.5});
    
    writer
    .to('.home__title__writer', 1.5, {x: -372},'+=4')
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
    
    .delay(5)

} 















 