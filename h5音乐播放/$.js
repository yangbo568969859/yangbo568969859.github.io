/**
 * Created by 杨博 on 2017/6/22.
 */
function $(selector,flag=false){
    var type=typeof selector;
    if(type=="function"){
        window.onload=function(){
            selector();
        }
    }else if(type=='string'){
        if(selector.startsWith('<')&&selector.endsWith('>')){
            return document.createElement(selector.slice(1,-1));
        }else {
            if(flag){
                return document.querySelectorAll(selector);
            }else {
                return document.querySelector(selector);
            }
        }

    }
}