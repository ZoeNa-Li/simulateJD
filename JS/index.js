function $(id){ return document.getElementById(id)}

var TopBar = $("topbanner");
var topbarClose = $("topbarClose");
topbarClose.onclick = function(e){
var eve=e;
topbarClose.onclick = null;
eve.target.parentNode.parentNode.innerHTML= ' ';
};



/*for(var i = 0; i < CateList.length; i++){
	var itemLi = CateList[i];
	itemli.onmouseenter = function(){
		 $("cate_detail").style.top = 0;
	}
}
*/
for(var i = 0; i < 15; i++){
	var item =  $("cate_item"+i);
	item.onmouseover = function(){
	this.parentNode.parentNode.nextElementSibling.style.left = '190px';
};
item.onmouseout = function(){
	this.parentNode.parentNode.nextElementSibling.style.left = '8999px';
};
}
var cateDetail=$('cate_detail');
cateDetail.onmouseover=function(e){

e.target.style.left = '190px';
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