/**
 * Created by Li Shuyi on 2016/10/14.
 */
function $(id){ return document.getElementById(id)}

//动态添加图片
var box = $("sliderBox");
var slider = document.createElement("div");
slider.setAttribute("id","slider");
box.appendChild(slider);
//<ul> <a> <img> </a> </ul>
var sliderul = document.createElement("ul");
sliderul.setAttribute("id","slider-img-ul")
slider.appendChild(sliderul);

for (var i = 0;i < 5;i++){

 
    var aimg = document.createElement("a");
    aimg.setAttribute("id","aimg");
    aimg.setAttribute("href"," #");

    var imgs = document.createElement("img");
    imgs.setAttribute("src","./images/slider"+(i+1)+".jpg");
    aimg.appendChild(imgs);
    sliderul.appendChild(aimg);
}

//动态创建小圆点

var circle = document.createElement("div");
circle.setAttribute("id","circle");
box.appendChild(circle);
var circleul = document.createElement("ul");
circleul.setAttribute("id","circle-ul");
circle.appendChild(circleul);

var cir_lis = sliderul.children;
//alert(cir_lis.length)
for (var i = 0; i < cir_lis.length; i++){
    var cirspan = document.createElement("span");
    cirspan.innerHTML = i+1;
    circleul.appendChild(cirspan);
}
//console.log(circleul.firstChild);
var spans = circleul.children;
spans[0].setAttribute("class","current")
//动态交互操作
//鼠标放在盒子上显示箭头
box.onmouseover = function(){
    $("arr").style.display = "block";
}
box.onmouseout = function(){
    $("arr").style.display = "none";
}



