var scroll1 = new TimelineMax();

scroll1
.set('.about__text', {autoAlpha: 0, y: 300})
.to('.about__text', 2, {autoAlpha: 1, y: 0, ease: Power2.easeOut})

var controller = new ScrollMagic.Controller();      
var scene1 = new ScrollMagic.Scene({
    triggerElement: '.about',
    triggerHook: 1,
  //  duration: "20%",
    offset: 350
    
})
.reverse(true)
.setTween(scroll1)
.addIndicators()
.addTo(controller);



var scroll2 = new TimelineMax();

scroll2
.set('.portfolio__gallery__item', {autoAlpha: 0, y: 300})
.to('.portfolio__gallery__item', 2, {autoAlpha: 1, y: 0, ease: Power2.easeOut})

var controller = new ScrollMagic.Controller();      
var scene1 = new ScrollMagic.Scene({
    triggerElement: '.portfolio',
    triggerHook: 1,
  //  duration: "20%",
    offset: 350
    
})
.reverse(false)
.setTween(scroll2)
.addIndicators()
.addTo(controller);



