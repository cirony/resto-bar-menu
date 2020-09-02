$('.menu .menu-item').click(function() {
    $('.menu-item .text').removeClass('selected');
    $(this).children('.text').addClass('selected');
});