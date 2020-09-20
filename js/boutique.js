$(document).ready(function() {
    $(".boutique .owl-carousel").owlCarousel({
        loop: false,

        items: 2,
        stagePadding: 70,
        dots: false,
        nav: true,
        slideSpeed: 5000,
        autoplayTimeout: 2000,
        autoplayHoverPause: false,
        navText: ["<img class='arrow-left' src='img/arrow-left.svg'>", "<img class='arrow-left' src='img/arrow-right.svg'>"],
        responsive: {
            0: {
                items: 1,
                stagePadding: 10,

            },
            500: {
                items: 2,
                stagePadding: 50,
            },
            991: {
                items: 1,
                stagePadding: 50,

            },
            1250: {
                items: 2,
                stagePadding: 70,

            },


        }

    });
});
$(document).ready(function() {
    $(".INGCO .owl-carousel").owlCarousel({
        loop: false,
        items: 1,
        dots: false,
        nav: true,
        slideSpeed: 500,
        autoplayTimeout: 2000,
        autoplayHoverPause: false,
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1,


            },
            500: {
                items: 2,
            },
            700: {
                items: 2,
            },
            999: {
                items: 2,
            },
            1000: {
                items: 1,
            },
            1250: {
                items: 1,
            },
        }


    });
});

$(document).ready(function() {
    $(".boutique-ingco .owl-carousel").owlCarousel({
        loop: true,
        items: 5,
        dots: false,
        nav: true,
        slideSpeed: 500,
        autoplayTimeout: 2000,
        autoplayHoverPause: false,
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1,



            },
            500: {
                items: 2,
            },
            700: {
                items: 3,
            },

            1200: {
                items: 4,
            },
            1600: {
                items: 5,
            },
        }


    });
});
$(document).ready(function() {
    $(".boutique-kaiser .owl-carousel").owlCarousel({
        loop: true,
        items: 5,
        dots: false,
        nav: true,
        slideSpeed: 500,
        autoplayTimeout: 2000,
        autoplayHoverPause: false,
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1,


            },
            500: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1200: {
                items: 4,
            },
            1600: {
                items: 5,
            },
        }

    });
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}