$(document).ready(function() {
    $("header .search").click(function() {
        $("header nav .form-inline .form-control").toggleClass("width-input");

    });
    $(".patient .consultation").click(function() {


    });


    $('.input-discussion .form-control').emojioneArea();


    $(".consultation").click(function() {

        $(this).parent().next(".consultation-fade").toggle(500);
        $(this).children().toggleClass("rotate-180");

    });

    $(".chatting-bar .chatting-lien").click(function() {
        $(".message,.patient,.info-pro,.mon-compte,.Effective,.progress-bar1,.Availability1,.next").fadeOut(100);

    });
    $(".chatting-bar .dashboard1").click(function() {
        $(".next").fadeIn(100);

    });

    $(".chatting-bar .dashboard2").click(function() {
        $(".patient").fadeIn(100);

    });
    $(".chatting-bar .dashboard3").click(function() {
        $(".progress-bar1").fadeIn(100);

    });
    $(".chatting-bar .dashboard4").click(function() {
        $(".Availability1").fadeIn(100);

    });
    $(".chatting-bar .dashboard5").click(function() {
        $(".mon-compte").fadeIn(100);

    });
    $(".chatting-bar .dashboard6").click(function() {
        $(".Effective").fadeIn(100);

    });
    $(".message-chatting").click(function() {
        $(".message").fadeIn(100);
        $(".patient,.info-pro,.mon-compte,.Effective,.progress-bar1,.Availability1,.next").fadeOut(100);

    });




    $(".fc-right").append("<br><div class='looking'><input type='text' class=' form-control' placeholder='What are you looking for?'><button type='submit'  class='search-btn22'><img src='img/search2.png'></div>");
    $(".navbar-light .navbar-toggler").click(function() {
        $(".navbar-collapse").delay(1000).toggleClass("open");


    });


    var sourceSwap = function() {
        var $this = $(this);
        var newSource = $this.find("img").data('alt-src');
        $this.find("img").data('alt-src', $this.find("img").attr('src'));
        $this.find("img").attr('src', newSource);
    }
    $(function() {
        $('.chatting-lien').hover(sourceSwap, sourceSwap);
    });
});

var bar = new ProgressBar.Line(lineProgress, {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1400,
    color: '#69DEAA',
    trailColor: '#eee',
    trailWidth: 1,


});
bar.animate(1.0);
var bar = new ProgressBar.Line(lineProgressNext, {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1400,
    color: '#69DEAA',
    trailColor: '#eee',
    trailWidth: 1,


});
bar.animate(1.0);
var bar = new ProgressBar.Circle(circleProgress, {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1400,
    color: '#DA3F81',
    trailColor: '#eee',
    trailWidth: 1,

});

bar.animate(0.7);
var bar = new ProgressBar.Circle(circleProgressNext, {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1400,
    color: '#DA3F81',
    trailColor: '#eee',
    trailWidth: 1,

});

bar.animate(0.7);
var bar = new ProgressBar.Line(lineProgress2, {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1400,
    color: '#69DEAA',
    trailColor: '#eee',
    trailWidth: 1,



});
bar.animate(0.3);
var bar = new ProgressBar.Line(lineProgress2Next, {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1400,
    color: '#69DEAA',
    trailColor: '#eee',
    trailWidth: 1,



});
bar.animate(0.3);
var bar = new ProgressBar.Circle(circleProgress1, {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1400,
    color: '#69DEAA',
    trailColor: '#eee',
    trailWidth: 1,

});

bar.animate(0.7);
var bar = new ProgressBar.Circle(circleProgress1Next, {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1400,
    color: '#69DEAA',
    trailColor: '#eee',
    trailWidth: 1,

});

bar.animate(0.7);

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['interaction', 'dayGrid', 'timeGrid'],
        timeZone: 'UTC',
        defaultView: 'dayGridMonth',
        header: {
            left: 'dayGridMonth,timeGridWeek,timeGridDay',

            right: 'prev title ,next'
        },
        contentHeight: 600

    });
    calendar.render();

});