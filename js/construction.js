$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    items: 6,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1,
            margin: 0
        },
        576: {
            items: 2,
            margin: 0
        },
        786: {
            items: 3
        },
        992: {
            items: 6
        },

    },
});
$(document).ready(function() {
    $(".btn-devis a").click(function() {
        var offsetSection = $(".demande-devis .form-row").offset().top;
        $("body").animate({ scrollTop: offsetSection }, "200000");
    });

});