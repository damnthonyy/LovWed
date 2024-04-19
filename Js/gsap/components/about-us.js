gsap.registerPlugin(ScrollTrigger);

const $about = document.getElementById('about-us');
const $img = document.querySelector('.img-ceo');

gsap.to($img, {
    scrollTrigger: {
        trigger: $about,
        scrub: 0.5,
        invalidateOnRefresh: true,
    },
    y: $about.offsetHeight - $img.offsetHeight,
    ease: "none"
})

const $text = document.querySelector('.details-ceo');

gsap.to($text, {
    scrollTrigger: {
        trigger: $about,
        markers: false,
        start: " 30% top",

    },
    opacity: 1,
})