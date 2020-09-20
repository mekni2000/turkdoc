$(".actualite1 .owl-carousel").owlCarousel({
    loop: false,
    dots: false,
    nav: true,
    margin: -300,
    stagePadding: 20,
    slideSpeed: 5000,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
    responsive: {

        0: {
            items: 1,
            stagePadding: 50,
            margin: 20,

        },
        500: {
            items: 2,
            stagePadding: 50,
            margin: 10,
        },
        991: {
            items: 2,
            stagePadding: 50,
            margin: -110,
        },
        1200: {
            items: 2,
            stagePadding: 50,
            margin: -100,
        },
        1500: {
            margin: -160,
            stagePadding: 20,
            items: 2


        },
        1700: {
            items: 2,
            stagePadding: 70,
            margin: -210,


        },
        1900: {
            items: 2,
            stagePadding: 70,
            margin: -260,
        }


    }

});





$(".fa-angle-left").click(function() {
    var n = $(".materiel-btp").length;
    var p = $(".materiel-btp");
    for (var i = 0; i < n; i++) {
        $(".materiel-btp").toArray().addClass('amine');


    }


});
$(document).ready(function() {
    $(".actualite1 .scroll").click(function() {
        var offsetSection = $(".nos-acualite").offset().top;
        $("body").animate({ scrollTop: offsetSection }, "200000");
    });
});




$(document).ready(function() {


    $(".CONSEIL-pros1").mouseenter(function() {
        $(this).addClass("conseil-background");
        $(".CONSEIL-pros1 p,.CONSEIL-pros1 span,.CONSEIL-pros1 a").css("color", "#fff");
        $(".CONSEIL-pros1 img").attr("src", "img/interview-blanc.png");


    });
    $(".CONSEIL-pros1").mouseleave(function() {
        $(this).removeClass("conseil-background");
        $(".CONSEIL-pros1 p,.CONSEIL-pros1 span,.CONSEIL-pros1 a").css("color", "#404040");
        $(".CONSEIL-pros1 span").css("color", "#626262");

        $(".CONSEIL-pros1 img").attr("src", "img/interview.png");


    });
    $(".CONSEIL-pros2").mouseenter(function() {
        $(this).addClass("conseil-background");
        $(".CONSEIL-pros2 p,.CONSEIL-pros2 span,.CONSEIL-pros2 a").css("color", "#fff");
        $(".CONSEIL-pros2 img").attr("src", "img/architect-blanc.png");


    });
    $(".CONSEIL-pros2").mouseleave(function() {
        $(this).removeClass("conseil-background");
        $(".CONSEIL-pros2 p,.CONSEIL-pros2 span,.CONSEIL-pros2 a").css("color", "#404040");
        $(".CONSEIL-pros2 span").css("color", "#626262");

        $(".CONSEIL-pros2 img").attr("src", "img/architect.png");


    });
    $(".CONSEIL-pros3").mouseenter(function() {
        $(this).addClass("conseil-background");
        $(".CONSEIL-pros3 p,.CONSEIL-pros3 span,.CONSEIL-pros3 a").css("color", "#fff");
        $(".CONSEIL-pros3 img").attr("src", "img/parquet-blanc.png");


    });
    $(".CONSEIL-pros3").mouseleave(function() {
        $(this).removeClass("conseil-background");
        $(".CONSEIL-pros3 p,.CONSEIL-pros3 span,.CONSEIL-pros3 a").css("color", "#404040");
        $(".CONSEIL-pros3 span").css("color", "#626262");

        $(".CONSEIL-pros3 img").attr("src", "img/parquet.png");


    });
});
new WOW().init();