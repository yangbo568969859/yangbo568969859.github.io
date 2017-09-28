$(document).ready(function () {
    var runPage;
    runPage = new FullPage({
        id: 'pageContain',
        slideTime: 800,
        effect: {
            transform: {
                translate: 'Y'
            },
            opacity: [0, 1]
        },
        mode: 'wheel, touch, nav:navBar',
        easing: 'linear'
    });


    $('.emailmax').toggleClass('active');
    $('.emailmin').toggleClass('active1');
    $('.change').toggleClass('active');
    $('.topic').toggleClass('active');
    $('.title').toggleClass('active');
    $('.main').toggleClass('active');
    $('.vedio').toggleClass('active');
    $('.vedio1').toggleClass('active');
    $('.shijue').toggleClass('active');
    $('.shijue1').toggleClass('active');
    $('.shiword').toggleClass('active');
    $('.shipic').toggleClass('active');
    $('.head').toggleClass('active');
    $('.dongtai').toggleClass('active');
    $('.dongtai1').toggleClass('active');
    $('.dongword').toggleClass('active');
    $('.dongpic').toggleClass('active');
    $('.donghead').toggleClass('active');

    $('.pic1').toggleClass('active');
    $('.pic2').toggleClass('active');
    $('.pic3').toggleClass('active');
    $('.pic4').toggleClass('active');

    $('.bangong').toggleClass('active');
    $('.banword').toggleClass('active');
    $('.dongback').toggleClass('active');

    $('.lianword').toggleClass('active');
    $('.lianimg').toggleClass('active');
    $('.lianxi').toggleClass('active');

    $('.houword').toggleClass('active');
    $('.houpic').toggleClass('active');

    $('.conpic1').toggleClass('active');
    $('.conpic2').toggleClass('active');
    $('.conpic3').toggleClass('active');

    $('.you1').toggleClass('active');
    $('.you2').toggleClass('active');
    $('.you3').toggleClass('active');


})