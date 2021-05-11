
$(function(){

$(".ame-bot").click(function(){
			
    $("#ame_support_guide").animate({bottom: ".5%"} ,300);
    $("#ame_support_guide").animate({right: ".5%"} ,300);
    $("#ame_support_guide").animate({width: "99%"} ,400);
    $(".ame-bot").off(click);
});

$(".bot-close").click(function(){
    
    $("#ame_support_guide").animate({bottom: "-108%"} ,2000);
    $("#ame_support_guide").animate({right: "-100%"} ,1000);
    $("#ame_support_guide").animate({width: "0%"} ,800);
    $(".bot-close").off(click);
});

$(".ame-bot").trigger("click");


});

function yScroll(){
    ame = document.getElementById('ame_support_guide');
    yPos = window.pageYOffset;

    if(yPos >5 ){
        ame.style.display = "";
        
       
        
    }
    
    if(yPos > 250) {
      
        ame.style.display = "";
        
        
    }
}

window.addEventListener("scroll", yScroll);




document.addEventListener('DOMContentLoaded', function(){
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
        direction: 'right',
        
    });

});