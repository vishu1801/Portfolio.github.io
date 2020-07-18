$(document).ready(function(){
	var scroll_start=0;
	var startchange = $('#about');
	var offset = startchange.offset();
	if(startchange.length){
		$(document).scroll(function(){
			scroll_start = $(this).scrollTop();
			if(scroll_start > offset.top){
				$(".icons").css("opacity","1");
				$(".icons").css("top","50%");
				$(".icons").css("flex-direction","column"); 
			}else{
				$(".icons").css("opacity","0");
			}
		});
	}
});