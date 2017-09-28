/**
 * Created by 杨博 on 2017/7/6.
 */
window.onload=function () {
    var audio=$('audio');
    var current=0;
    var database=[
        {id:"1",name:'周二珂',song:'走在冷风中',src:'music/周二珂 - 走在冷风中.mp3',imgsrc:'img/T002R300x300M000004FES4i1g0uWJ.jpg'},
        {id:"2",name:'王若琳',song:'I Love You',src:'music/王若琳 - I Love You.mp3',imgsrc:'img/T002R300x300M000003RMaRI1iFoYd.jpg'},
        {id:"3",name:'陈小春',song:'独家记忆',src:'music/陈小春 - 独家记忆.mp3',imgsrc:'img/T002R300x300M000002Neh8l0uciQZ.jpg'},
        {id:"4",name:'周二珂',song:'走在冷风中',src:'music/周二珂 - 走在冷风中.mp3',imgsrc:'img/T002R300x300M000004FES4i1g0uWJ.jpg'},
        {id:"5",name:'王若琳',song:'I Love You',src:'music/王若琳 - I Love You.mp3',imgsrc:'img/T002R300x300M000003RMaRI1iFoYd.jpg'},
        {id:"6",name:'陈小春',song:'独家记忆',src:'music/陈小春 - 独家记忆.mp3',imgsrc:'img/T002R300x300M000002Neh8l0uciQZ.jpg'},
    ];
    //将数据加载到页面中
    var ul=$('.lienei>ul');
    database.forEach(function (value) {
        var li=$('<li>');
        li.setAttribute('src',value.src);
        li.id=value.id;
        li.innerHTML=`
            <div class="lis">
                <div class="gouxuan"></div>
                <div class="lie-number">${1}</div>
                <div class="song"><span>${value.song}</span></div>
                <div class="geshou"><a href="">${value.name}</a></div>
                <div class="shijian">02:34</div>                             
            </div>    
        `
        ul.appendChild(li);
    });
    //点击播放按钮开始放歌
    //获取播放按钮
    var bofang=$('.play');
    bofang.onclick=function () {
        if(audio.paused){
            audio.play();
            bofang.firstElementChild.className="iconfont icon-zantingbofang"
        }else{
            audio.pause();
            bofang.lastElementChild.className="iconfont icon-bofanganniu"
        }
    }
    //进度条的变化随歌曲的播放变化
    //歌曲时间的变化
    var time=$('.time');
    var jindu=$('.jin-time');
    audio.ontimeupdate=function () {
        time.firstElementChild.innerHTML=timechange(audio.currentTime);
        time.lastElementChild.innerHTML=timechange(audio.duration);
        jindu.firstElementChild.style.width=audio.currentTime/audio.duration*100+'%';
        jindu.lastElementChild.style.left=audio.currentTime/audio.duration*100+'%';
    }

    //时间格式的变化
    function timechange(time) {
        time=Math.round(time);
        var min=Math.trunc(time/60)>=10?Math.trunc(time/60):'0'+Math.trunc(time/60);
        var miao=time%60>=10?time%60:'0'+time%60;
        return min+':'+miao;
    }
    //音量按钮的变化
    var voicebtn=$('.voice1');
    var voicechag=$('.voice-jindu');
    var currentvolume = 1;
    voicebtn.onclick=function (e) {
        var way=e.target||e.srcElement;
        if(way.nodeName=='SPAN'){
            if(audio.volume==0){
                audio.volume=currentvolume;
                voicebtn.firstElementChild.className='iconfont icon-yinliang';
                voicechag.firstElementChild.style.width=100+'%';
                voicechag.lastElementChild.style.left=100+'%';
            }else{
                currentvolume=audio.volume;
                audio.volume=0;
                voicebtn.firstElementChild.className='iconfont icon-jingyin';
                voicechag.firstElementChild.style.width=0+'px';
                voicechag.lastElementChild.style.left=0+'px';
            }
        }


    }
    //音量的变化
    voicechag.onclick=function (e) {
        var ox=e.offsetX;
        audio.volume=ox/60;
        voicechag.firstElementChild.style.width=ox+'px';
        voicechag.lastElementChild.style.left=ox/60*100+'%';
    }
    //按下左右按钮切换歌曲
    var menu=$('.lienei ul li',true);
    function change(an='l') {
        if(an=='l'){
            current--;
            if(current < 0){
                current=database.length-1;
            }
        }else if(an == 'r'){
            current++;
            if(current>database.length-1){
                current = 0;
            }
        }
        // let result=database.findIndex(function (value) {
        //     return value.id=current;
        // });
        audio.src=database[current].src;
        menu.forEach(function (value,index) {
            value.className='';
            imgbox.children[index].style.display='none';
        })
        menu[current].className='active';
        imgbox.children[current].style.display='block';
        bofang.firstElementChild.className='iconfont icon-zantingbofang';
        audio.play();

    }
    var prove=$('.prove');
    var next=$('.next');
    prove.onclick=function () {
        change('l');
    }
    next.onclick=function () {
        change('r');
    }

    //双击播放
    ul.onclick=function (e) {
        var way=e.target||e.srcElement;
        if(way.className=='song'&&way.nodeName=='DIV'){
            way.parentNode.parentNode.classList.add('active');
            var index=database.findIndex(function (value) {
                return value.id==way.parentNode.parentNode.id;
            })
            audio.src=database[index].src;
            menu.forEach(function (value,index) {
                value.classList.remove('active');
                imgbox.children[index].style.display='none';
            })
            menu[index].classList.add('active');
            imgbox.children[current].style.display='block';
            bofang.firstElementChild.className='iconfont icon-zantingbofang';
            audio.play();
        }
    }
    //图片的变化
    var imgbox=$('.backpic');
    let database1=[
        {id:1,src:"img/T002R300x300M000004FES4i1g0uWJ.jpg"},
        {id:2,src:"img/T002R300x300M000003RMaRI1iFoYd.jpg"},
        {id:3,src:"img/T002R300x300M000002Neh8l0uciQZ.jpg"},
        {id:4,src:"img/T002R300x300M000004FES4i1g0uWJ.jpg"},
        {id:5,src:"img/T002R300x300M000003RMaRI1iFoYd.jpg"},
        {id:6,src:"img/T002R300x300M000002Neh8l0uciQZ.jpg"},
    ];
    database1.forEach(function (value) {
        let div=$('<div>');
        div.className='middle-img';
        div.id=value.id;
        div.innerHTML=`
            <a href="">
                <img src="${value.src}" alt="">
            </a>
        `
        imgbox.appendChild(div);

    })

}