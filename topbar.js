
 
 $(function(){
		$("main").show();
		$("#preloader-text-desktop").delay(1300).animate({right: "22.5%"}, 1500);
		
		$("#preload-page").delay(3800).fadeOut(1200);
	 
		$("#menu-btn").click(function(){
			$("#close-trigger").css("display", "block");
			$("#offslide").animate({left: "0%"}, 600);
			$("#artworks-house").animate({left: "-100%"}, 800);
			$(".navbar-house").animate({right: "-100%"}, 500);
			$("#offslide-h1").animate({left: "15%"} ,900);
			$("#offslide-down-1").animate({bottom: "0%"} ,200);
			$("#offslide-down-1").animate({width: "100%"} ,400);
			$("#menu-btn").off(click);
		});
	
		$("#close-trigger").click(function(){
			$("#offslide").animate({left: "-100%"}, 600);
			$(".navbar-house").animate({right: "0%"}, 400);
			$("#artworks-house").animate({left: "0%"}, 500);
			$("#offslide-h1").animate({left: "-70%"}, 900);
			$("#close-trigger").css("display", "block");
			$("#offslide-down-1").animate({bottom: "-108%"} ,400);
			$("#offslide-down-1").animate({width: "0%"} ,300);
			$("#close-trigger").off(click);
		});



		$("#art1").mouseenter(function(){
			$("#art1 img").animate({width: "100%", left: "0%", opacity: "0.25"}, 800);
			$("#art-overlay1").animate({width: "100%"}, 800);
			$("#art1 h3").css("display", "block");
			$("#art1 #download").css("display", "block");
			$("#artworks-house #cart").css("display", "block");
			
		});
		
		$("#art1").mouseleave(function(){
			$("#art1 img").animate({width: "95%", left: "5%", opacity: "1"}, 1000)
			$("#art-overlay1").animate({width: "0%"}, 1000);
			$("#art1 h3").css("display", "none");
			$("#art1 #download").css("display", "none");
			$("#artworks-house #cart").css("display", "none");
			
		});

		$("#art2").mouseenter(function(){
			$("#art2 img").animate({width: "100%", left: "0%", opacity: "0.25"}, 800)
			$("#art-overlay2").animate({width: "100%"}, 800);
			$("#art2 h3").css("display", "block");
			$("#art2 #download").css("display", "block");
			$("#artworks-house #cart1").css("display", "block");
			
		});
		
		$("#art2").mouseleave(function(){
			$("#art2 img").animate({width: "95%", left: "5%", opacity: "1"}, 1000)
			$("#art-overlay2").animate({width: "0%"}, 1000);
			$("#art2 h3").css("display", "none");
			$("#art2 #download").css("display", "none");
			$("#artworks-house #cart1").css("display", "none");
			
		});

		$("#art3").mouseenter(function(){
			$("#art3 img").animate({width: "100%", left: "0%", opacity: "0.25"}, 800)
			$("#art-overlay3").animate({width: "100%"}, 800);
			$("#art3 h3").css("display", "block");
			$("#art3 #download").css("display", "block");
			$("#artworks-house #cart2").css("display", "block");
			
		});
		
		$("#art3").mouseleave(function(){
			$("#art3 img").animate({width: "95%", left: "5%", opacity: "1"}, 1000)
			$("#art-overlay3").animate({width: "0%"}, 1000);
			$("#art3 h3").css("display", "none");
			$("#art3 #download").css("display", "none");
			$("#artworks-house #cart2").css("display", "none");
			
		});

		$("#art4").mouseenter(function(){
			$("#art4 img").animate({width: "100%", left: "0%", opacity: "0.25"}, 800)
			$("#art-overlay4").animate({width: "100%"}, 800);
			
		});
		
		$("#art4").mouseleave(function(){
			$("#art4 img").animate({width: "95%", left: "5%", opacity: "1"}, 1000)
			$("#art-overlay4").animate({width: "0%"}, 1000);
			
		});

		$("#art5").mouseenter(function(){
			$("#art5 img").animate({width: "100%", left: "0%", opacity: "0.25"}, 800)
			$("#art-overlay5").animate({width: "100%"}, 800);
			
		});
		
		$("#art5").mouseleave(function(){
			$("#art5 img").animate({width: "95%", left: "5%", opacity: "1"}, 1000)
			$("#art-overlay5").animate({width: "0%"}, 1000);
			
		});



		
		$("#works-span").click(function(){
			$("#down").animate({height: "13%"}, 800);
			$("#contact").animate({top: "79%"}, 500);
			$("#exhibition").animate({top: "86%"}, 500);
			$("#works-span").css("display", "none");
			$("#works-span2").css("display", "block");
			$("#mob-year").css("display", "block");
			$("#mob-series").css("display", "block");
			$("#mob-year").animate({bottom: "0%", opacity: ".3"}, 800);
			$("#mob-series").animate({bottom: "35%", opacity: ".3"}, 800);
			$("#works-span").off(click);
		});
		
		$("#works-span2").click(function(){
			$("#down").animate({height: "0%"}, 800);
			$("#contact").animate({top: "66%"}, 1000);
			$("#exhibition").animate({top: "73%"}, 1000);
			$("#works-span").css("display", "block");
			$("#works-span2").css("display", "none");
			$("#mob-year").animate({bottom: "0%", opacity: "0"}, 800);
			$("#mob-series").animate({bottom: "35%", opacity: "0"}, 800);
			$("#works-span2").off(click);
		});
		
  });

