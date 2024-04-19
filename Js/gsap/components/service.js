gsap.registerPlugin(ScrollTrigger);

const $textHero = document.querySelector('.s-hero-text');
const $gallery = gsap.utils.toArray('.gallery-services .gallery-img');
const $imgHero = document.querySelector('.gallery-img');
const $service = document.getElementById('service');


gsap.to($textHero, {
    scrollTrigger: {
        trigger: $service,
        markers: false,
        start: "50% 50%",
        end: "bottom 70%",
        pin: true,
        /* delay: 1, */

    }
})

$gallery.forEach(($imgHero, index) => {
    ScrollTrigger.create({
        trigger: $service,
        markers: false,
        start: '40% 50%',
        end: '40% 10%',
        scrub: true,
        animation: gsap.to($imgHero, { y: '-100vh' }),
    })

});