/**
 * Created by Li Shuyi on 2016/10/14.
 */
function $(id){ return document.getElementById(id)}

//动态添加图片
var box = $("sliderBox");
var slider = $("slider");

//<ul> <a> <img> </a> </ul>
var sliderul = $("slider-img-ul"); 

var Firstaimg = document.createElement("a");
    Firstaimg.setAttribute("id","aimg");
    Firstaimg.setAttribute("href"," #");
var Firstimgs = document.createElement("img");
    Firstimgs.setAttribute("src","./images/slider5.jpg");
    Firstaimg.appendChild(Firstimgs);
    sliderul.appendChild(Firstaimg);

for (var i = 0;i < 5;i++){
    var aimg = document.createElement("a");
    aimg.setAttribute("id","aimg");
    aimg.setAttribute("href"," #");

    var imgs = document.createElement("img");
    imgs.setAttribute("src","./images/slider"+(i+1)+".jpg");
    aimg.appendChild(imgs);
    sliderul.appendChild(aimg);
}
var Lastaimg = document.createElement("a");
    Lastaimg.setAttribute("id","aimg");
    Lastaimg.setAttribute("href"," #");
var Lsatimgs = document.createElement("img");
    Lsatimgs.setAttribute("src","./images/slider5.jpg");
    Lastaimg.appendChild(Lsatimgs);
    sliderul.appendChild(Lastaimg);

//动态创建小圆点

var circle = $("circle");
var circleul = document.createElement("ul");
circleul.setAttribute("id","circle-ul");
circle.appendChild(circleul);

var cir_lis = sliderul.children;
//alert(cir_lis.length)
for (var i = 0; i < cir_lis.length-2; i++){
    var cirspan = document.createElement("span");
    cirspan.innerHTML = i+1;
    cirspan.setAttribute("index",i+1);
    circleul.appendChild(cirspan);
}
var circles = circleul.childNodes;
circles[0].setAttribute("class","current");

//动态交互操作


//操作
 var index = 1;
function animate(offset) {//这里的offset是当前图片的索引, 例如第一张, 第二张这样
                var change = offset * -790;

                startMove(sliderul, {left: change}, function(){});
            }           

function play() {
                timer = setInterval(function () {
                 $("right").onclick()
                }, 2000)
              /* $("arr").style.display = "none"; */
            }
            play();
            function stop() {
                /* $("arr").style.display = "block";*/
                clearInterval(timer);
            }
            $("slider").onmouseover = stop;//当鼠标停留在图片区域时停止滚动
            $("slider").onmouseout = play;//当鼠标离开图片区域时开始滚动

  $("left").onclick = function() {//左点击函数
                index--;
                if (index < 1) {//这里的目的主要在于可以使图片轮播形成完整的圆柱无缝衔接效果, 即当图片位于第一张, 点击左切换按钮时, 我们在上面html部分设置7张图片就起了作用, 现在将当前图片直接位置定位到第七张图片, 直接修改不用动画改变(参阅上面的html结构, 我们的第七章照片和第一张是一样的).
                    index = 5;
                    sliderul.style.left = -3950 + 'px';
                }
                    buttonsShow();
                    animate(index);
            }
    $("right").onclick = function() {//这个目的同上.
                index++;
                if (index > 5) {
                    index = 1;
                    sliderul.style.left = 0+ 'px';
                }
                buttonsShow();
                animate(index);
            }
  // 以下为小圆点
          
            function buttonsShow() {//圆点样式显示, 给绑定一个class属性就成
                for (var i = 0; i < circles.length; i++) {
                    if (circles[i].className == 'current') {
                        circles[i].className = '';
                    }
                }
                circles[index-1].className = 'current';
            }
            for (var i = 0; i < circles.length; i++) {
                    (function(j){//这里由于关系到闭包因此我们处理一下
                        circles[j].onmouseenter  = function () {
                            var clickIndex = parseInt(this.getAttribute('index'));
                            animate(clickIndex); //存放鼠标点击后的位置，用于小圆点的正常显示 
                            index = clickIndex;
                            buttonsShow();
                        }
                    })(i)
                }   


            

//平缓运动函数
            function startMove(obj, changeData, func) {
                //我们将这个定时器绑到该元素上便于清除与管理
                clearInterval(obj.timer);
                var iCurValue = 0;
                var iSpeed = 0;
                var bStop;
                obj.timer = setInterval(function () {

                    bStop = true;//判断当前所有动作是否全部执行完毕
                    iCurValue = parseInt(obj.style['left']);
                    iSpeed = (changeData['left'] - iCurValue) / 10;//缓冲运动效果
                 
                    if(iSpeed > 0) {//为防止在最后的部分运动距离过小, 因此在这里向上向下取整
                        iSpeed = Math.ceil(iSpeed);
                    }else{
                        iSpeed = Math.floor(iSpeed);
                    }
                    obj.style['left'] = iCurValue + iSpeed + 'px';
                    if(iCurValue !== changeData['left']) {
                        bStop = false;
                    }
                    if(bStop) {
                        //整个动作执行完毕
                        flag = 0;
                        clearInterval(obj.timer);
                        func();//当全部动作执行完毕之后, 执行回调函数.
                    }
                }, 30);
            }

