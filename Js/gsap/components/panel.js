/* const $container = document.querySelector('.container-pl-and-co');
const $sections = gsap.utils.toArray('container-pl-and-co .panel');


gsap.to($sections, {
    xPercent: -100 * ($sections.length - 1),
    ease: "none",
    trigger: $container,
    pin: true,
    scrub: 1,
    snap: 1 / ($sections.length - 1),
    markers: true,
    horizontal: true,
    end: () => "+=" + document.querySelector("#container-pl-and-co").offsetWidth,



}) */