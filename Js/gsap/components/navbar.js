

document.querySelectorAll('.nav-link .link').forEach(function (link) {
    link.addEventListener('mouseover', function () {
        // Remove 'active' class from all images
        document.querySelectorAll('.nav-pic .img').forEach(function (img) {
            img.style.opacity = '0';
        });

        // Add 'active' class to the image with the same data-image attribute
        var imageToShow = link.getAttribute('data-image');
        document.querySelector('.nav-pic img[src="' + imageToShow + '"]').style.opacity = '1';
    });
});

const $close = document.querySelector('.btn-fermer');
const $open = document.querySelector('.btn-menu');
const $overlay = document.querySelector('.nav-link-overlay');

$open.addEventListener('click', () => {
    $overlay.classList.add('isActive')
})

$close.addEventListener('click', () => {
    $overlay.classList.remove('isActive')
})
