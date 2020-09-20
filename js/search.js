$('.rendez-vous .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,

    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    navText: ["<img src='img/arrow-left.png'>", "<img src='img/arrow-right.png'>"],

    responsive: {
        0: {
            items: 2
        },
        500: {
            items: 5
        },
        800: {
            items: 7
        },
        991: {
            items: 4
        },
        1300: {
            items: 5
        },
        1500: {
            items: 7
        }

    }
});

$('.pagination .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,

    dots: true,
    navText: ["<img src='img/arrow-left1.png'>", "<img src='img/arrow-right1.png'>"],


    responsive: {
        0: {
            items: 3
        },
        400: {
            items: 5
        },
        1000: {
            items: 8
        }
    }
});
//animation de button de responsive 
$(document).ready(function() {
    $('.hmbrgr.demo').hmbrgr({
        width: 30,
        height: 22,
        speed: 150,
        barHeight: 3,
        barRadius: 3,
        barColor: '#4a4949'



    });

});
$(function() {
    $('select').selectric();
});


var index = 1;
drJhon = document.getElementsByClassName("dr-jhon4");

function next111() {


    drJhon[index - 1].style.display = "none";
    drJhon[index].style.display = "block";

    index++;
    console.log(index);
    if (index >= drJhon.length) {
        index = drJhon.length - 1;
    }

}

function prev111() {

    drJhon[index].style.display = "none";

    drJhon[index - 1].style.display = "block";

    index--;
    console.log(index);
    if (index <= 1) {
        index = 1;
    }
}

function readURL(input) {
    if (input.files) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#image_upload_preview').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);

    }
}
$("#inputFile").change(function() {
    readURL(this);

});