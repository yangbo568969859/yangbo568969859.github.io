$(document).ready(function () {
    $('.head-main3').click(function () {
        $(this).children().toggleClass('icon-chahao icon-denghao');
        $('.mainshow').slideToggle(600);
    })
    $('.showzuo').hover(function () {
        $(this).find('.top1').addClass('active');
        $(this).find('.top2').addClass('active');
    },function () {
        $(this).find('.top1').removeClass('active');
        $(this).find('.top2').removeClass('active');
    })


    var search=document.querySelector('.search');
    var floors=document.querySelectorAll('.tiaozhuan');
    var navs=document.querySelectorAll('.search li');
    window.onscroll=function () {
        let sObj=document.body.scrollTop==0?document.documentElement:document.body;
        let sTop=sObj.scrollTop;
        floors.forEach(function (value,index) {
            if(floors[0].offsetTop<=sTop){
                $('.search').slideDown();
            }else{
                $('.search').slideUp();
            }
            if(floors[3].offsetTop<=sTop+200){
                $('.exp1-main3').addClass('active');
                $('.exp1-main2').addClass('active');
            }
            if(floors[2].offsetTop<=sTop+200){
                $('.know-move1').addClass('active');
                $('.know-move2').addClass('active');
                $('.know-move3').addClass('active');

                $('.know-move4').addClass('active');
                $('.know-move5').addClass('active');
                $('.know-move6').addClass('active');

            }
        });

    }
    $('.search li').each(function (index,value) {
        $(this).click(function () {
            $(document.body).animate({
                scrollTop:floors[index].offsetTop,
            })
        })
    })

    $('.mainshow li').each(function (index,value) {
        $(this).click(function () {
            $(document.body).animate({
                scrollTop:floors[index].offsetTop,
            })
        })
    })


    // var search=$('.search');
    // var floors=$('.tiaozhuan');
    // var navs=$('.main2 li');
    // console.log(floors);
    // window.onscroll=function () {
    //     let sObj=document.body.scrollTop==0?document.documentElement:document.body;
    //     let sTop=sObj.scrollTop;
    //     floors.each(function (index,value) {
    //         console.log(floors[1].offsetTop);
    //         if(floors[1].offsetTop<=sTop){
    //             $('.search').animate({
    //                 height:0,
    //             },500)
    //         } else{
    //             $('.search').animate({
    //                 height:50,
    //             },500)
    //         }
    //     })
    // }


})

$(window).load(function() {
    var $container = $('.showlist');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
    $('.zuopin a').click(function () {
        $('.zuopin .active').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });
})

//