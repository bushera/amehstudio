 $(function(){
		$("main").show();
		$("#preload-page").delay(4000).fadeOut(1000);
	 
		$("#offslide-btn").click(function(){
			   $("#offslide").animate({left: "0%"}, 800);
			   $("#offslide-btn").css("display", "none");
			   $("#offslide-h1").animate({left: "15%"} ,900);
			   $("#offslide-btn").off(click);
			   
		});
		
		
		$("#offslide-close").click(function(){
			   $("#offslide").animate({left: "-100%"}, 800);
			   $("#offslide-btn").css("display", "block");
			   $("#offslide-h1").animate({left: "-70%"}, 900);
			   $("#offslide-close").off(click);
		});	
		
  });

