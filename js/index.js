$(document).ready(function() {
    var headerHeight = $("header").innerHeight(),
        callHeight = $(".call").innerHeight(),
        navHzight = $("header .bg-nav").height();

    x = headerHeight - callHeight;
    $("header .bg-nav").css('height', x);

});
//fhover de section comment marche
$(document).ready(function() {

    $(".marche .medecin-pro").mouseenter(function() {
        $(this).find("p,h4").addClass("add-color");
        $(this).find("a").addClass("add-lien");
    });

    $(".marche .medecin-pro").mouseleave(function() {
        $(this).find("p,h4").removeClass("add-color");
        $(this).find("a").removeClass("add-lien");
    });
    $(".appointment").mouseenter(function() {
        $(".appointment img").attr('src', 'img/appointment-blanche.png');
    });
    $(".appointment").mouseleave(function() {
        $(".appointment img").attr('src', 'img/appointment.png');
    });

    $(".materiel .owl-carousel .owl-item").mouseenter(function() {
        $(this).find('p,span').css('color', '#fff');
        $(this).find('.mt-2 img').attr('src', 'img/next1.png');
    });
    $(".materiel .owl-carousel .owl-item").mouseleave(function() {
        $(this).find('p,span').css('color', '#AEAEAE');
        $(this).find('.mt-2 img').attr('src', 'img/next.png');

    });
    $(".materiel .Matériaux1").mouseenter(function() {
        $(this).find('.engage-toggle img').attr('src', 'img/engage11.png');
        $(this).find('p').addClass('blanche');
        $(this).find('.mt-2 img').attr('src', 'img/next-mat.png');
    });
    $(".materiel .Matériaux1").mouseleave(function() {
        $(this).find('.engage-toggle img').attr('src', 'img/engage1.png');
        $(this).find('p').removeClass('blanche');
        $(this).find('.mt-2 img').attr('src', 'img/next.png');

    });
    $(".materiel .Matériaux2").mouseenter(function() {
        $(this).find('.engage-toggle img').attr('src', 'img/engage22.png');
        $(this).find('p').addClass('blanche');
        $(this).find('.mt-2 img').attr('src', 'img/next-mat.png');
    });
    $(".materiel .Matériaux2").mouseleave(function() {
        $(this).find('.engage-toggle img').attr('src', 'img/engage2.png');
        $(this).find('p').removeClass('blanche');
        $(this).find('.mt-2 img').attr('src', 'img/next.png');

    });
    $(".materiel .Matériaux3").mouseenter(function() {
        $(this).find('.engage-toggle img').attr('src', 'img/engage33.png');
        $(this).find('p').addClass('blanche');
        $(this).find('.mt-2 img').attr('src', 'img/next-mat.png');
    });
    $(".materiel .Matériaux3").mouseleave(function() {
        $(this).find('.engage-toggle img').attr('src', 'img/engage2.png');
        $(this).find('p').removeClass('blanche');
        $(this).find('.mt-2 img').attr('src', 'img/next.png');

    });
    /*hover de partie marche*/
    $(".marche .medecin-pro1").mouseenter(function() {
        $(this).find('img').attr('src', 'img/set1.png');
        $(this).find(".p-hide").show();
        $(".marche .medecin-pro1 p").addClass("text-left pl-5");
        $(this).removeClass("m-4");

    });
    $(".marche .medecin-pro1").mouseleave(function() {
        $(this).find('img').attr('src', 'img/medecin-pro.png');
        $(this).find(".p-hide").hide();
        $(this).removeClass("text-left");

    });
    $(".marche .medecin-pro2").mouseenter(function() {
        $(this).find('img').attr('src', 'img/set2.png');
        $(this).find(".p-hide").show();
        $(".marche .medecin-pro2 p").addClass("text-left pl-5");
        $(this).removeClass("m-4");

    });
    $(".marche .medecin-pro2").mouseleave(function() {
        $(this).find('img').attr('src', 'img/rendez-vous.png');
        $(this).find(".p-hide").hide();
        $(this).removeClass("text-left");

    });
    $(".marche .medecin-pro3").mouseenter(function() {
        $(this).find('img').attr('src', 'img/set2.png');
        $(this).find(".p-hide").show();
        $(".marche .medecin-pro3 p").addClass("text-left pl-5");
        $(this).removeClass("m-4");

    });
    $(".marche .medecin-pro3").mouseleave(function() {
        $(this).find('img').attr('src', 'img/confirmer.png');
        $(this).find(".p-hide").hide();
        $(this).removeClass("text-left");

    });



});

$(document).ready(function() {
    $('.image-rotator').hiSlide();
    $('#rotator-demo').hiSlide({

        interval: 2000000000,

        speed: 700000000000

    });
});
/*modal signup*/
$(document).ready(function() {
    $(".eyes-img").click(function() {
        $(".form-control").attr("type", "text");

    });




    $(function() {
        $('select').selectric();
    });
    $('.hmbrgr.demo').hmbrgr({
        width: 30,
        height: 22,
        speed: 150,
        barHeight: 3,
        barRadius: 3,
        barColor: '#4a4949'
    });
    $(".main").fadeOut(2000);
});

$(document).ready(function() {
    $(".professoinnels  .owl-carousel").owlCarousel({
        loop: false,
        stagePadding: 40,
        items: 2,
        dots: false,
        nav: true,
        autoplayTimeout: 200,
        autoplayHoverPause: false,
        navText: ["<img  src='img/left-arrow.png'>", "<img class='right-arrow' src='img/right-arrow.png'>"],
        responsive: {
            0: {
                items: 1,
                stagePadding: 10,

            },
            600: {
                items: 2,


            },
            1000: {
                items: 2,
                stagePadding: 20,


            },


        }
    });
});
$(document).ready(function() {
    $(".specialistes  .owl-carousel").owlCarousel({
        loop: true,
        stagePadding: 0,
        items: 2,
        dots: false,
        nav: true,

        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        navText: ["<img  src='img/prev-carousel.png'>", "<img src='img/next-carousel.png'>"],
        responsive: {
            0: {
                items: 1,
                stagePadding: 10,

            },
            800: {
                items: 2,




            },
            1000: {
                items: 3,
                stagePadding: 10,


            },
            1500: {
                items: 4
            },


        }
    });
});
new WOW().init();
/* modal hide header*/
$(document).ready(function() {
    /*popup forgot password et login*/
    $(".login2  .forget-password a").click(function() {
        $(".login2").modal("hide");


    });
    $(".forgot-passowrd1 .btn-sign a").click(function() {
        $(".forgot-passowrd1").modal("hide");

    });
    $(".forgot-passowrd12 .btn-sign a").click(function() {
        $(".forgot-passowrd12").modal("hide");

    });
    $("#forgot-pass .login1 button").click(function() {
        $(".forgot-passowrd1").modal("hide");
        $("#exampleModalLong").modal("show");

    });
    $("#forgot-pass2 .login1 button").click(function() {
        $("#forgot-pass2").modal("hide");
        $("#forgot-pass").modal("show");

    });
    /*popup esppace dr*/
    $("#espace-docteur .obtenir a").click(function() {
        $("#espace-docteur").modal("hide");

    });
    $("#exampleModalCenter .btn-sign a").click(function() {
        $("#exampleModalCenter").modal("hide");

    });
    $("#verif-email .verif-bleu").click(function() {
        $("#verif-email").modal("hide");

    });
    $("#exampleModalCenter .back button").click(function() {
        $("#exampleModalCenter").modal("hide");
        $("#espace-docteur").modal("show");


    });
    $("#verif-email .back button").click(function() {
        $("#verif-email").modal("hide");
        $("#exampleModalCenter").modal("show");


    });
    $("#conf-email .back button").click(function() {
        $("#conf-email").modal("hide");
        $("#verif-email").modal("show");


    });
    /*popup patient*/

    $("#exampleModal .btn-sign a").click(function() {
        $("#exampleModal").modal("hide");

    });
    $("#exampleModalCenterPatient .btn-sign a").click(function() {
        $("#exampleModalCenterPatient").modal("hide");

    });
    $("#verif-emailPatient .verif-bleu").click(function() {
        $("#verif-emailPatient").modal("hide");

    });
    $("#exampleModalCenterPatient .back button").click(function() {
        $("#exampleModalCenterPatient").modal("hide");
        $("#espace-docteur").modal("show");


    });
    $("#verif-emailPatient .back button").click(function() {
        $("#verif-emailPatient").modal("hide");
        $("#exampleModalCenterPatient").modal("show");


    });
    $("#conf-emailPatient .back button").click(function() {
        $("#conf-emailPatient").modal("hide");
        $("#verif-emailPatient").modal("show");


    });
});