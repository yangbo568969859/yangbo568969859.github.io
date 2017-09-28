/**
 * Created by 杨博 on 2017/7/6.
 */
$(function () {
    var current=0;
    var bgcolor=$('.bgcolor');
    var bgpic=$('.backpic a');

    var datebase=[
        {id:"1",name:'周二珂',song:'走在冷风中',src:'music/周二珂 - 走在冷风中.mp3',imgsrc:'img/T002R300x300M000004FES4i1g0uWJ.jpg'},
        {id:"2",name:'王若琳',song:'I Love You',src:'music/王若琳 - I Love You.mp3',imgsrc:'img/T002R300x300M000003RMaRI1iFoYd.jpg'},
        {id:"3",name:'陈小春',song:'独家记忆',src:'music/陈小春 - 独家记忆.mp3',imgsrc:'img/T002R300x300M000002Neh8l0uciQZ.jpg'},
    ];
    var liebiao=$('.lienei>ul');
    datebase.forEach(function (value) {
        var lis=$('<li>');
        lis.id=value.id;
        current=value.id;
        lis.innerHTML=`
            <div class="lis">
                <div class="gouxuan"></div>
                <div class="lie-number">${1}</div>
                <div class="song"><span>${value.song}</span></div>
                <div class="geshou"><a href="">${value.name}</a></div>
                <div class="shijian">02:34</div>                             
            </div>               
        `
        liebiao.appendChild(lis);
    })

    var play=$('.play');
    var audio=$('audio');

    //点击播放按钮
    play.onclick=function () {
        if(audio.paused){
            audio.play();
            play.firstElementChild.className='iconfont icon-zantingbofang';
        }else{
            audio.pause();
            play.firstElementChild.className='iconfont icon-bofanganniu';
        }
        menu[current].className='active';
    }
    //时间的变化
    var time1=$('.time');
    audio.ontimeupdate=function () {
        time1.firstElementChild.innerHTML=format(this.currentTime);
        time1.lastElementChild.innerHTML=format(this.duration);
        var jindu1=$('.time-top');
        jindu1.style.width=(this.currentTime/this.duration)*100+'%';
        var circle=$('.circle');
        circle.style.left=(this.currentTime/this.duration)*100+'%';
    }

    //进度条的变化

    function format(time) {
        time=Math.round(time);
        var min=Math.trunc(time/60)>=10?Math.trunc(time/60):'0'+Math.trunc(time/60);
        var miao=time%60>=10?time%60:'0'+time%60;
        return min+':'+miao;
    }

    var currentvolume=1;
    var voice=$('.voice1');
    var voicejin=$('.voice-jindu');
    voice.onclick=function () {
        if(audio.volume==0){
            audio.volume=currentvolume;
            voice.firstElementChild.className='iconfont icon-yinliang';
            voicejin.firstElementChild.style.width=100+'%';
            voicejin.lastElementChild.style.left=100+'%';
        }else{
            currentvolume=audio.volume;
            audio.volume=0;
            voice.firstElementChild.className='iconfont icon-jingyin';
            voicejin.firstElementChild.style.width=0;
            voicejin.lastElementChild.style.left=0;

        }
    }
    //当点击进度条的时候
    voicejin.onclick=function (e) {
        var ox=audio.volume;
        var ox=e.offsetX;
        // if(){
        //
        // }
        // alert(1);
        audio.volume=ox/100;
        voicejin.firstElementChild.style.width=ox+'px';
        voicejin.lastElementChild.style.left=ox/60*100+'%';

    }
    
    
    //音量更改时候
    // audio.onvolumechange=function () {
    //     var size=audio.volume;
    //     voicejin.firstElementChild.style.width=size*100+'%';
    //     voicejin.lastElementChild.style.left=size*100+'%';
    // }

    //点击上一首或者下一首按钮的时候
    var prove=$('.prove');
    var next=$('.next');
    var menu=$('.lienei ul li',true);
    var ul=$('.lienei ul');
    next.onclick=function () {
        current++;
        if(current>=datebase.length){
            current=0;
        }
        audio.src=datebase[current].src;
        menu.forEach(function (value) {
            value.className='';
        })
        menu[current].className='active';
        play.firstElementChild.className='iconfont icon-zantingbofang';
        audio.play();
    }
    prove.onclick=function () {
        current--;
        if(current<0){
            current=datebase.length-1;
        }
        audio.src=datebase[current].src;
        menu.forEach(function (value) {
            value.className='';
        })
        menu[current].className='active';
        play.firstElementChild.className='iconfont icon-zantingbofang';
        audio.play();
    }

    ul.ondblclick=function (e) {

        var obj=e.target||e.srcElement;
        if(obj.className=='song'){

            obj.parentNode.parentNode.className='active';
            var index=datebase.findIndex(function (value) {

                return value.id==obj.parentNode.parentNode.getAttribute('id');
            })

            audio.src=datebase[index].src;
            menu.forEach(function (value) {
                value.className='';
            });
            menu[index].className='active';
            // bgcolor.src=datebase[index].imgsrc;
            // bgpic.src=datebase[index].imgsrc;
            audio.play();
            current=index;
            play.firstElementChild.className='iconfont icon-zantingbofang';
        }
    }
    audio.onended=function () {
        
    }


})