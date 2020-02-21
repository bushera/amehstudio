var prev, next, h1, menu, topfloor,imgbody, tpflr, Ypos;
    
     
      function downmenu(menu){
      menu = document.getElementById(menu);
      h1 = document.getElementById("h1");
      topfloor = document.getElementById("topfloor");
      imgbody = document.getElementById("imgbody");
      downbar = document.getElementById("downbar")
      
    if (menu.style.display == "none")
    {
        menu.style.display = "block";
        topfloor.style.width = "38px";
        imgbody.style.display = "none";
        downbar.style.display = "block";
        }
        
        
        else{ menu.style.display = "none";
              topfloor.style.width ="33px";
              imgbody.style.display = "block";
              downbar.style.display = "none";  
        }
    
   }
   
       function scrlz(){
           Ypos = window.pageYoffset;
           tpflr = document.getElementById("tpflr");
           h1 = document.getElementById("h1");
           
           if(Ypos>10){
               h1.style.display= "none";
               tpflr.style.height = "block";
           }
           else{
                 h1.style.display = "block";
                 tpflr.style.height = "none";
           }
         
           
           
       }
       
  function change(){
  document.location.href = "http://amehegwuh.netlify.com"
  }
       
   window.addEventListener("scroll", scrlz);