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