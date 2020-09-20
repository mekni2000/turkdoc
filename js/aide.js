$(document).ready(function() {
    $(".question").click(function() {
        $(this).children("p").toggle(100);
        $(this).find("h3").toggleClass("rouge");


    });

});