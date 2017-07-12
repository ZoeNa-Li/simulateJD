
function $(id){ return document.getElementById(id)}

var TopBar = $("topbanner");
var topbarClose = $("topbarClose");
topbarClose.onclick = function(e){
topbarClose.onclick = null;
e.target.parentNode.parentNode.innerHTML= ' ';
};


for(var i = 0; i < 15; i++){
	var item =  $("cate_item"+i);
	item.onmouseover = function(){
	this.parentNode.parentNode.nextElementSibling.style.left = '170px';
};
item.onmouseout = function(){
	this.parentNode.parentNode.nextElementSibling.style.left = '8999px';
};
}
var cateDetail=$('cate_detail');
cateDetail.onmouseover=function(e){

e.target.style.left = '170px';
}
cateDetail.onmouseleave=function(e){

e.target.style.left = '8999px';
}

//固定搜索栏
window.onscroll = function(event) {

	 var scrollPos;  
        if (window.pageYOffset) {  
        scrollPos = window.pageYOffset; }  
        else if (document.compatMode && document.compatMode != 'BackCompat')  
        { scrollPos = document.documentElement.scrollTop; }  
        else if (document.body) { scrollPos = document.body.scrollTop; }   
       if(Math.abs(scrollPos) > 600){ 
       $("search-fx").style.display = 'block';
	}else{
		$("search-fx").style.display = 'none';
	}

};
//秒杀
var miaoshaOffset = -1000;
$("miaosha-arrleft").onclick = function(e){
if( miaoshaOffset == -1000  ){
	miaoshaOffset = -2000;
	}else if( miaoshaOffset == -2000){
	 miaoshaOffset = -1000 ;
	
	}else if( miaoshaOffset == 0){
		miaoshaOffset = -1000;
	};
	$("miaosha-ul").style.transform = "translateX("+ miaoshaOffset+"px)";
}
$("miaosha-arrright").onclick = function(e){
	if( miaoshaOffset == -1000  ){
	miaoshaOffset = -2000;

	}else if( miaoshaOffset == -2000){
	 miaoshaOffset = -1000 ;
	
	}else if( miaoshaOffset == 0){
		miaoshaOffset = -1000;
	};
	$("miaosha-ul").style.transform = "translateX("+ miaoshaOffset+"px)";
}
var tollTime = 6 * 60 *60;
/*var sect= 60;
var mineu = 60;
var house = 60;*/
var TollMin = 0;

function CountDown(){
      tollTime--;
   var   sect = tollTime % 60;
   var   mineu =Math.floor((tollTime/60)  % 60) ;
   var   house = Math.floor(tollTime/60/60);

    $("timer-sec").innerHTML = sect;
    $("timer-min").innerHTML =  mineu;
    $("timer-house").innerHTML = house;

     if(sect == 0 && mineu == 0 && house == 0){
     	clearInterval(miaoshaTimer)
     }
}
miaoshaTimer = setInterval(CountDown,1000); 
