$(document).ready(function () {
    $('.menu-content').click(function () {
        $(this).toggleClass('active');
        $('.menu-list').slideToggle();
    })
    $('.lang-menu').click(function () {
        // $(this).toggleClass('active');
        $('.lang-list').slideToggle();
    })
    $('.liebiao>li').hover(function () {
        $(this).find('.info-word2').slideDown();
        $(this).find('.info-word').fadeOut(0);
    },function () {
        $(this).find('.info-word2').slideUp();
        $(this).find('.info-word').fadeIn();

    })
})