gsap.registerPlugin(ScrollTrigger);

const $textHero = document.querySelector('.s-hero-text');
const $gallery = gsap.utils.toArray('.gallery-services .gallery-img');
const $imgHero = document.querySelector('.gallery-img');
const $service = document.getElementById('service');
const $provision = document.querySelector('.service-provision');


gsap.to($textHero, {
    scrollTrigger: {
        trigger: $service,
        markers: false,
        start: "50% 50%",
        end: "bottom 70%",
        pin: true,
        toggleAction: "play reverse play reverse",
        onLeave: () => {
            animation: gsap.to($textHero, { opacity: 0 });
        },
        onEnterBack: () => {
            // Jouer l'animation lorsque l'utilisateur revient en arrière et entre à nouveau
            gsap.to($textHero, { opacity: 1 });
        },

    }
})

$gallery.forEach(($imgHero, index) => {
    ScrollTrigger.create({
        trigger: $service,
        markers: false,
        start: "50% 50%",
        end: "bottom 70%",
        scrub: 0.5,
        animation: gsap.to($imgHero, { y: '-100vh' }),
    })

});


gsap.to($provision, {
    opacity: 1,
    scrollTrigger: {

        trigger: $provision,
        markers: false,
        start: '20% 50%',
        end: 'bottom 50%',
        toggleAction: "play reverse play reverse",
        /* scrub: true, */
    }

})

