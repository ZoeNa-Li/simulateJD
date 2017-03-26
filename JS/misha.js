var JSONData=[
	{
		"filename":"ms0.jpg",
		"desc":"夏普（SHARP）LCD-60SU465A 60英寸 日本原装液晶面板 4K超高清 智能液晶电视",
		"price":"5699.00"
	},
	{
		"filename":"ms1.jpg",
		"desc":"珍享 国产丑橘 不知火 丑柑 2.5kg装 单果重180-250g 橘子 桔子    自营水果",
		"price":"35.8"
	},
	{
		"filename":"ms2.jpg",
		"desc":"【京东超市】心相印卫生纸 卷筒纸 心柔系列 卷纸3层180g*27卷 （整箱销售）",
		"price":"59.5"
	},
	{
		"filename":"ms3.jpg",
		"desc":"飞科(FLYCO)FC5902专业电动理发器成人儿童电推剪 ",
		"price":"512.0"
	},
	{
		"filename":"ms4.jpg",
		"desc":"【黑色键盘套装】微软（Microsoft）Surface Pro 4（Intel i5 4G内存 128G存储 预装Win10 Office）",
		"price":"1888.0"
	},
	{
		"filename":"ms5.jpg",
		"desc":"【京东超市】君乐宝（JUNLEBAO）1*200g*24 开啡尔常温酸奶 电商量贩装",
		"price":"69.9"
	},
	{
		"filename":"ms6.jpg",
		"desc":"华为(HUAWEI)M2 8.0英寸 平板电脑1920×1200 麒麟930 哈曼卡顿音效 3G/32G WiFi)香槟金",
		"price":"1488.0"
	},
	{
		"filename":"ms7.jpg",
		"desc":"飞科 FLYCO FS339全身水洗刮胡刀  智能电动剃须刀",
		"price":"115.0"
	},
	{
		"filename":"ms8.jpg",
		"desc":"谜石(MEGA STONE)德国原厂樱桃（cherry） mx红轴RGB幻刃系列HK10 幻彩机械键盘",
		"price":"689.0"
	},
	{
		"filename":"ms9.jpg",
		"desc":"戴尔DELL灵越二合一15MF Pro-R2505TSS 15.6英寸触控笔记本电脑(i5-7200U 8G 256GSSD FHD IPS Win10)银",
		"price":"4999.0"
	}
];
function $(id){ return document.getElementById(id)}
for(var i=0,j=0 ; i < JSONData.length+5; i++){
   if(i<=9){
   	j=i
   }else{
   	j=i-10;
   }
	var goodliImg = document.createElement("img");
	    goodliImg.setAttribute("src","./images/"+JSONData[j].filename);
		goodliImg.setAttribute("class","miaosha-goodliImg");
		goodliImg.setAttribute("id","miaosha-goodliImg");

    var goodliP = document.createElement("p");
        goodliP.innerHTML = JSONData[j].desc;
        goodliP.setAttribute("class","miaosha-goodliP");
	var goodliDiva = document.createElement("a");
	    goodliDiva.setAttribute("class","goodli-a");
	    goodliDiva.appendChild(goodliImg);
	    goodliDiva.appendChild(goodliP);
	    goodliDiva.onmouseenter = function(e){
	    	e.target.firstChild.style.transform = "translateY(-4px)";
	    };
	    	   goodliDiva.onmouseleave = function(e){
	    	e.target.firstChild.style.transform = "translateY(4px)";

	    };
	var goodlishadow = document.createElement("span");
	    goodlishadow.setAttribute("class","li_item_shadow");
	var goodliDiv= document.createElement("div");
		goodliDiv.setAttribute("class","list-item-pic");
		goodliDiv.appendChild(goodliDiva);
		goodliDiv.appendChild(goodlishadow);
	var goodi = document.createElement('i');
	    goodi.innerHTML ='￥';
		goodi.setAttribute("class","goodi");
	var goodpricespan = document.createElement('span');
	    goodpricespan.innerHTML =JSONData[j].price; 
		goodpricespan.setAttribute("class","goodpricespan");   
	var goodPrice = document.createElement('p');
	    goodPrice.setAttribute("class","miaosha-goodPrice");
	    goodPrice.appendChild(goodi);
	    goodPrice.appendChild(goodpricespan);
	var goodli = document.createElement("li");
	    goodli.setAttribute("class","list-item");
	    goodli.appendChild(goodliDiv);
	    goodli.appendChild(goodPrice);
$("miaosha-ul").appendChild(goodli)	;
}



