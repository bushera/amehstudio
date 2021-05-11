
 
 $(function(){
		$("main").show();
		$("#preload-page").delay(3800).fadeOut(1200);






		$("#menu-btn").click(function(){
			$("#close-trigger").css("display", "block");
			$("#offslide").animate({left: "0%"}, 600);
			$("#artworks-house").animate({left: "-100%"}, 1500);
			$(".navbar-house").animate({right: "-100%"}, 500);
			$("#offslide-h1").animate({left: "15%"} ,900);
			$("#offslide-down-1").animate({bottom: "0%"} ,200);
			$("#offslide-down-1").animate({width: "100%"} ,400);
			$("#menu-btn").off(click);
		});
	
		$("#close-trigger").click(function(){
			$("#offslide").animate({left: "-100%"}, 600);
			$(".navbar-house").animate({right: "0%"}, 400);
			$("#artworks-house").animate({left: "0%"}, 800);
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
			$("#art4 h3").css("display", "block");
			$("#art4 #download").css("display", "block");
			$("#artworks-house #cart3").css("display", "block");
			
			
		});
		
		$("#art4").mouseleave(function(){
			$("#art4 img").animate({width: "95%", left: "5%", opacity: "1"}, 1000)
			$("#art-overlay4").animate({width: "0%"}, 1000);
			$("#art4 h3").css("display", "none");
			$("#art4 #download").css("display", "none");
			$("#artworks-house #cart3").css("display", "none");
			
		});

		$("#art5").mouseenter(function(){
			$("#art5 img").animate({width: "100%", left: "0%", opacity: "0.25"}, 800)
			$("#art-overlay5").animate({width: "100%"}, 800);
			$("#art5 h3").css("display", "block");
			$("#art5 #download").css("display", "block");
			$("#artworks-house #cart4").css("display", "block");
			
		});
		
		$("#art5").mouseleave(function(){
			$("#art5 img").animate({width: "95%", left: "5%", opacity: "1"}, 1000)
			$("#art-overlay5").animate({width: "0%"}, 1000);
			$("#art5 h3").css("display", "none");
			$("#art5 #download").css("display", "none");
			$("#artworks-house #cart4").css("display", "none");
			
		});

























		$("#art1-desk").mouseenter(function(){
			
			$("#art-overlay1-desk").animate({width: "69.5%", height: "100%", top: "0%"}, 1100);
			$("#art1-desk .art-sidebar").delay(400).fadeOut(1000);
			
			$("#art1 h3").css("display", "none");
			$("#art-overlay1-desk #download").css("display", "block");
			$("#art-overlay1-desk .request").css("display", "block");
			
			
		});
		
		$("#art1-desk").mouseleave(function(){

			$("#art-overlay1-desk").animate({width: ".5%", height: "90%", top: "5%"}, 1100);
			$("#art1-desk .art-sidebar").delay(200).fadeIn(600);
			
			$("#art1 h3").css("display", "block");
			$("#art-overlay1-desk #download").css("display", "none");
			$("#art-overlay1-desk .request").css("display", "none");
			
			
		});


		$("#art2-desk").mouseenter(function(){
			
			$("#art-overlay2-desk").animate({width: "69.5%", height: "100%", top: "0%"}, 1100);
			$("#art2-desk .art-sidebar").delay(400).fadeOut(1000);

			$("#art1 h3").css("display", "block");
			$("#art1 #download").css("display", "block");
			$("#artworks-house #cart").css("display", "block");
			
		});
		
		$("#art2-desk").mouseleave(function(){

			$("#art-overlay2-desk").animate({width: ".5%", height: "90%", top: "5%"}, 1100);
			$("#art2-desk .art-sidebar").delay(200).fadeIn(600);

			$("#art1 h3").css("display", "block");
			$("#art1 #download").css("display", "block");
			$("#artworks-house #cart").css("display", "block");
			
			
			
		});

		$("#art3-desk").mouseenter(function(){
			
			$("#art-overlay3-desk").animate({width: "69.5%", height: "100%", top: "0%"}, 1100);
			$("#art3-desk .art-sidebar").delay(400).fadeOut(1000);

			$("#art1 h3").css("display", "block");
			$("#art1 #download").css("display", "block");
			$("#artworks-house #cart").css("display", "block");
			
		});
		
		$("#art3-desk").mouseleave(function(){

			$("#art-overlay3-desk").animate({width: ".5%", height: "90%", top: "5%"},1100);
			$("#art3-desk .art-sidebar").delay(200).fadeIn(600);

			$("#art1 h3").css("display", "block");
			$("#art1 #download").css("display", "block");
			$("#artworks-house #cart").css("display", "block");
			
			
			
		});

		$("#art4-desk").mouseenter(function(){
			
			$("#art-overlay4-desk").animate({width: "69.5%", height: "100%", top: "0%"}, 1100);
			$("#art4-desk .art-sidebar").delay(400).fadeOut(1000);

			$("#art1 h3").css("display", "block");
			$("#art1 #download").css("display", "block");
			$("#artworks-house #cart").css("display", "block");
			
		});
		
		$("#art4-desk").mouseleave(function(){

			$("#art-overlay4-desk").animate({width: ".5%", height: "90%", top: "5%"}, 1100);
			$("#art4-desk .art-sidebar").delay(200).fadeOut(600);

			$("#art1 h3").css("display", "block");
			$("#art1 #download").css("display", "block");
			$("#artworks-house #cart").css("display", "block");
			
			
			
		});

		$("#art5-desk").mouseenter(function(){
			
			$("#art-overlay5-desk").animate({width: "69.5%", height: "100%", top: "0%"}, 1100);
			$("#art5-desk .art-sidebar").delay(400).fadeOut(1000);

			$("#art1 h3").css("display", "block");
			$("#art1 #download").css("display", "block");
			$("#artworks-house #cart").css("display", "block");
			
		});
		
		$("#art5-desk").mouseleave(function(){

			$("#art-overlay5-desk").animate({width: ".5%", height: "90%", top: "5%"}, 1100);
			$("#art5-desk .art-sidebar").delay(200).fadeIn(600);

			$("#art1 h3").css("display", "block");
			$("#art1 #download").css("display", "block");
			$("#artworks-house #cart").css("display", "block");
			
			
			
		});


		$("#art6-desk").mouseenter(function(){
			
			$("#art-overlay6-desk").animate({width: "69.5%", height: "100%", top: "0%"}, 1100);
			$("#art6-desk .art-sidebar").delay(400).fadeOut(1000);

			$("#art1 h3").css("display", "block");
			$("#art1 #download").css("display", "block");
			$("#artworks-house #cart").css("display", "block");
			
		});
		
		$("#art6-desk").mouseleave(function(){

			$("#art-overlay6-desk").animate({width: ".5%", height: "90%", top: "5%"}, 1100);
			$("#art6-desk .art-sidebar").delay(200).fadeIn(600);

			$("#art1 h3").css("display", "block");
			$("#art1 #download").css("display", "block");
			$("#artworks-house #cart").css("display", "block");
			
			
			
		});


		$("#art7-desk").mouseenter(function(){
			
			$("#art-overlay7-desk").animate({width: "69.5%", height: "100%", top: "0%"}, 1100);
			$("#art7-desk .art-sidebar").delay(400).fadeOut(1000);

			$("#art1 h3").css("display", "block");
			$("#art1 #download").css("display", "block");
			$("#artworks-house #cart").css("display", "block");
			
		});
		
		$("#art7-desk").mouseleave(function(){

			$("#art-overlay7-desk").animate({width: ".5%", height: "90%", top: "5%"}, 1100);
			$("#art7-desk .art-sidebar").delay(200).fadeIn(600);

			$("#art1 h3").css("display", "block");
			$("#art1 #download").css("display", "block");
			$("#artworks-house #cart").css("display", "block");
			
			
			
		});


		$("#art8-desk").mouseenter(function(){
			
			$("#art-overlay8-desk").animate({width: "69.5%", height: "100%", top: "0%"}, 1100);
			$("#art8-desk .art-sidebar").delay(400).fadeOut(1000);

			$("#art1 h3").css("display", "block");
			$("#art1 #download").css("display", "block");
			$("#artworks-house #cart").css("display", "block");
			
		});
		
		$("#art8-desk").mouseleave(function(){

			$("#art-overlay8-desk").animate({width: ".5%", height: "90%", top: "5%"}, 1100);
			$("#art8-desk .art-sidebar").delay(200).fadeIn(600);

			$("#art1 h3").css("display", "block");
			$("#art1 #download").css("display", "block");
			$("#artworks-house #cart").css("display", "block");
			
			
			
		});

		$("#art9-desk").mouseenter(function(){
			
			$("#art-overlay9-desk").animate({width: "69.5%", height: "100%", top: "0%"}, 1100);
			$("#art9-desk .art-sidebar").delay(400).fadeOut(1000);

			$("#art1 h3").css("display", "block");
			$("#art1 #download").css("display", "block");
			$("#artworks-house #cart").css("display", "block");
			
		});
		
		$("#art9-desk").mouseleave(function(){

			$("#art-overlay9-desk").animate({width: ".5%", height: "90%", top: "5%"}, 1100);
			$("#art9-desk .art-sidebar").delay(200).fadeIn(600);

			$("#art1 h3").css("display", "block");
			$("#art1 #download").css("display", "block");
			$("#artworks-house #cart").css("display", "block");
			
			
			
		});



		$("#art10-desk").mouseenter(function(){
			
			$("#art-overlay10-desk").animate({width: "69.5%", height: "100%", top: "0%"}, 1100);
			$("#art10-desk .art-sidebar").delay(400).fadeOut(1000);

			$("#art1 h3").css("display", "block");
			$("#art1 #download").css("display", "block");
			$("#artworks-house #cart").css("display", "block");
			
		});
		
		$("#art10-desk").mouseleave(function(){

			$("#art-overlay10-desk").animate({width: ".5%", height: "90%", top: "5%"}, 1100);
			$("#art10-desk .art-sidebar").delay(200).fadeIn(600);

			$("#art1 h3").css("display", "block");
			$("#art1 #download").css("display", "block");
			$("#artworks-house #cart").css("display", "block");
			
			
			
		});



		$("#art11-desk").mouseenter(function(){
			
			$("#art-overlay11-desk").animate({width: "69.5%", height: "100%", top: "0%"}, 1100);
			$("#art11-desk .art-sidebar").delay(400).fadeOut(1000);

			$("#art1 h3").css("display", "block");
			$("#art1 #download").css("display", "block");
			$("#artworks-house #cart").css("display", "block");
			
		});
		
		$("#art11-desk").mouseleave(function(){

			$("#art-overlay11-desk").animate({width: ".5%", height: "90%", top: "5%"}, 1100);
			$("#art11-desk .art-sidebar").delay(200).fadeIn(600);

			$("#art1 h3").css("display", "block");
			$("#art1 #download").css("display", "block");
			$("#artworks-house #cart").css("display", "block");
			
			
			
		});


		$("#art12-desk").mouseenter(function(){
			
			$("#art-overlay12-desk").animate({width: "69.5%", height: "100%", top: "0%"}, 1100);
			$("#art12-desk .art-sidebar").delay(400).fadeOut(1000);

			$("#art1 h3").css("display", "block");
			$("#art1 #download").css("display", "block");
			$("#artworks-house #cart").css("display", "block");
			
		});
		
		$("#art12-desk").mouseleave(function(){

			$("#art-overlay12-desk").animate({width: ".5%", height: "90%", top: "5%"}, 1100);
			$("#art12-desk .art-sidebar").delay(200).fadeIn(600);

			$("#art1 h3").css("display", "block");
			$("#art1 #download").css("display", "block");
			$("#artworks-house #cart").css("display", "block");
			
			
			
		});


		$("#art13-desk").mouseenter(function(){
			
			$("#art-overlay13-desk").animate({width: "69.5%", height: "100%", top: "0%"}, 1100);
			$("#art13-desk .art-sidebar").delay(400).fadeOut(1000);

			$("#art1 h3").css("display", "block");
			$("#art1 #download").css("display", "block");
			$("#artworks-house #cart").css("display", "block");
			
		});
		
		$("#art13-desk").mouseleave(function(){

			$("#art-overlay13-desk").animate({width: ".5%", height: "90%", top: "5%"}, 1100);
			$("#art13-desk .art-sidebar").delay(200).fadeIn(600);

			$("#art1 h3").css("display", "block");
			$("#art1 #download").css("display", "block");
			$("#artworks-house #cart").css("display", "block");
			
			
			
		});



		$("#art14-desk").mouseenter(function(){
			
			$("#art-overlay14-desk").animate({width: "69.5%", height: "100%", top: "0%"}, 1100);
			$("#art14-desk .art-sidebar").delay(400).fadeOut(1000);

			$("#art1 h3").css("display", "block");
			$("#art1 #download").css("display", "block");
			$("#artworks-house #cart").css("display", "block");
			
		});
		
		$("#art14-desk").mouseleave(function(){

			$("#art-overlay14-desk").animate({width: ".5%", height: "90%", top: "5%"}, 1100);
			$("#art14-desk .art-sidebar").delay(200).fadeIn(600);

			$("#art1 h3").css("display", "block");
			$("#art1 #download").css("display", "block");
			$("#artworks-house #cart").css("display", "block");
			
			
			
		});


		$("#art15-desk").mouseenter(function(){
			
			$("#art-overlay15-desk").animate({width: "69.5%", height: "100%", top: "0%"}, 1100);
			$("#art15-desk .art-sidebar").delay(400).fadeOut(1000);

			$("#art1 h3").css("display", "block");
			$("#art1 #download").css("display", "block");
			$("#artworks-house #cart").css("display", "block");
			
		});
		
		$("#art15-desk").mouseleave(function(){

			$("#art-overlay15-desk").animate({width: ".5%", height: "90%", top: "5%"}, 1100);
			$("#art15-desk .art-sidebar").delay(200).fadeIn(600);

			$("#art1 h3").css("display", "block");
			$("#art1 #download").css("display", "block");
			$("#artworks-house #cart").css("display", "block");
			
			
			
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

