$(document).ready(function() {
    $(".Professionnel").click(function() {
        $(".Bonjour").hide();
        $(".bienvenue").fadeIn(100);
        $(".Particulier").hide();

        $(".Particulier0 p").removeClass("border-jaune");
        $(".Professionnel p").addClass("border-jaune");
        $(".Professionnel1").fadeIn(1000);


    });

    $(".Particulier0").click(function() {
        $(".Professionnel1").hide();
        $(".bienvenue").hide();
        $(".bonjour").fadeIn(100);
        $(".Professionnel p").removeClass("border-jaune");
        $(".Particulier0 p").addClass("border-jaune");
        $(".Particulier").fadeIn(1000);

    });




});