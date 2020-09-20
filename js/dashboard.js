/*
$(document).ready(function() {
    
    if ($(".table-responsive-sm").offset() == 10) {
        $(".checkmark").hide();
    }

});
*/
$(document).ready(function() {

    $(".profil-fade,.home-fade,.shopping-fade,.devis-fade,.service-fade,.offres-fade").click(function() {
        $(".devis,.panier,.devis-Managements,.banque,.profile,.telechargement,.uploader,.service,.passer-paiement,.promotions").fadeOut(100);
        $(".profil-fade,.home-fade,.shopping-fade,.devis-fade,.service-fade,.offres-fade").removeClass("border-jaune");
        $(".profil-fade p,.shopping-fade p,.devis-fade p,.service-fade p,.offres-fade p").removeClass("weight-jaune");

        $(".profil-fade img").attr("src", "img/profil-dashboard.png");
        $(".shopping-fade img").attr("src", "img/shopping-dashboard.png");
        $(".devis-fade img").attr("src", "img/devis-icon.png");
        $(".service-fade img").attr("src", "img/micro-dashboard.png");
        $(".offres-fade img").attr("src", "img/setting-dashboard.png");
    });
    $(".profil-fade").click(function() {
        $(".profile").fadeIn(200);
        $(".profil-fade img").attr("src", "img/profil-jaune.png");
        $(this).addClass("border-jaune");
        $(".profil-fade p").addClass("weight-jaune");


    });
    $(".shopping-fade").click(function() {
        $(".panier").fadeIn(200);
        $(".shopping-fade img").attr("src", "img/shopping-jaune.png");
        $(this).addClass("border-jaune");
        $(".shopping-fade p").addClass("weight-jaune");


    });
    $(".devis-fade").click(function() {
        $(".devis").fadeIn(200);
        $(".devis-fade img").attr("src", "img/devis-jaune.png");
        $(this).addClass("border-jaune");
        $(".devis-fade p").addClass("weight-jaune");


    });
    $(".service-fade").click(function() {
        $(".service").fadeIn(200);
        $(".service-fade img").attr("src", "img/service-jaune.png");
        $(this).addClass("border-jaune");
        $(".service-fade p").addClass("weight-jaune");


    });
    $(".offres-fade").click(function() {
        $(".promotions").fadeIn(200);
        $(".offres-fade img").attr("src", "img/setting-jaune.png");
        $(this).addClass("border-jaune");
        $(".offres-fade p").addClass("weight-jaune");


    });
    $(".panier .Passe-paiement").click(function() {
        $(".devis-Managements").fadeOut(100);
        $(".banque").fadeIn(1000);


    });
    $(".devis .Passe-paiement").click(function() {
        $(".devis").fadeOut(100);
        $(".banque").fadeIn(1000);


    });
    $(".passer-paie1").click(function() {
        $(".panier").fadeOut(100);
        $(".banque").fadeIn(1000);

    });

    $(".logo-dashboard a").click(function() {
        $(".logo-dashboard a p").fadeIn(1000);
    });
    $(".demande-devis111").click(function() {
        $(".devis-Managements").fadeOut(100);
        $(".devis").fadeIn(1000);

    });
    $(".valider").click(function() {
        $(".banque").fadeOut(100);
        $(".telechargement").fadeIn(1000);


    });
    $(".devis .table input").click(function() {    
        $(".home-dashboard .button-demande .Passe-paiement").show();
    });
    $(".btn-telecharger").click(function() {
        $(".telechargement").fadeOut(100);
        $(".uploader").fadeIn(1000);

    });
    $(".Suivant").click(function() {
        $(".uploader").fadeOut(100);
        $(".passer-paiement").fadeIn(1000);

    });



});