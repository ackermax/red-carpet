// Code to bypass splash page on mobile devices
if (screen.width <= 699) {
    location.href = "/search";
}

// Code to control spotlight on splash page
$('.searchlight')
    .on('mousemove', function (event) {
        $(this).addClass('on').css({ 'margin-left': event.pageX - 150, 'margin-top': event.pageY - 150 });
    })
    .on('mouseout', function (event) {
        $(this).removeClass('on');
    })
    .on('click', function () {
        $(this).fadeOut(function () {
            $(this).remove();
            location.href = "/search";
        });
    });