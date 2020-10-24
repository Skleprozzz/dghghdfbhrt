$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
        
        
	});
});


window.onload=function(){
    let progressbar=document.getElementById("progressbar"),
    body=document.body,
    html=document.documentElement,
    viewpointheight=window.innerHeight;
    
    let btn1=document.getElementById("btn1");
    let btn2=document.getElementById("btn2");
    let btn3=document.getElementById("btn3");
    let btn4=document.getElementById("btn4");
    let btn5=document.getElementById("btn5");
   
    
    let documentheight=Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    let scrollTopValue=function(){
        return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    }
    
    window.addEventListener("scroll", function(){
        let scroll=scrollTopValue();
        let progress=(scroll/(documentheight - viewpointheight));
        progressbar.style.width=68-63*progress +"%";
//        console.log(progress);
        
//      if (progress<=1)
//            btn1.style.color="#33ff33";
//        else btn1.style.color="#EF7D55";
//        
//        
//        if (progress<=0.83)
//            btn2.style.color="#0066cc";
//        else btn2.style.color="#EF7D55";
//        
//        
//        if (progress<=0.63)
//            btn3.style.color="#cccc00";
//        else btn3.style.color="#EF7D55";
//        
//        
//        if (progress<=0.43)
//            btn4.style.color="brown";
//        else btn4.style.color="#EF7D55";
//        
//        if (progress<=0.23)
//            btn5.style.color="#B3F208";
//        else btn5.style.color="#EF7D55";
//      
    });
    
 
    
    
    window.addEventListener("resize", function(){
        documentheight=Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    });
    
    window.scrollTo(1,document.body.scrollHeight);
    
    

}
    





