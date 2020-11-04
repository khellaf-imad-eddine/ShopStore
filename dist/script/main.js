gsap.registerPlugin(ScrollTrigger);


gsap.to(".work-card", {
    duration: 1,
    opacity: 1,
    y: "0",
    ease: "linear",
    scrollTrigger: {
        trigger: ".work-card",
        //markers: true,
        start: "top 100%",
        end: "bottom 0%",
        toggleActions: "restart ",
    }

});

gsap.registerPlugin(ScrollTrigger);
gsap.to('progress', {
    value: 100,
    ease: 'none',
    scrollTrigger: {
        scrub: 0.3
    }
});