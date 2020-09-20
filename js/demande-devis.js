$(document).ready(function() {


    $('.popup-btn').on('click', function() {
        $(".popup-devis").delay(5000).fadeOut('slow');


    });
    var x = $(".equipe .increment-0").text();

    $(".equipe .carousel-control-next").click(function() {

        $(".equipe .increment-0").text(x);

        if ($(".equipe .increment-0").text() > 3) {

            $(".equipe .increment-0").text(x = 1);
        }
        if (x == 0) {
            x = 1;
        }

        x++;





    });
    $(".equipe .carousel-control-prev").click(function() {

        $(".equipe .increment-0").text(x);
        if ($(".equipe .increment-0").text() <= 1) {

            $(".equipe .increment-0").text(x = 1);
        }

        x--;
    });
});