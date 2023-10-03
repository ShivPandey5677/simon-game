var a=["red","green","blue","yellow"];
var started=false;
  var level=0;
  var b=[];
  var flag=0;
   $(document).keydown(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      check();
      started = true;
    }
  });
  enable();
  function enable(){

           $(".btn").click(function(){
            var clicked=$(this).attr("id");
               if(clicked===b[flag])
               {
                   var aud=new Audio(`./sounds/${clicked}.mp3`);
                   aud.play();
                   $("#"+clicked).addClass("pressed");
                   setTimeout(function(){
                       $("#"+clicked).removeClass("pressed");
                   },100); 

                   flag++;

                   if(flag===b.length)
                   {
                    flag=0;
                    setTimeout(check,1000);
                   }
               }
               else{
                   
                   var aud=new Audio(`./sounds/wrong.mp3`);
                   aud.play();
                   $(".btn").addClass("game-over");
                   setTimeout(function(){
                       $(".btn").removeClass("game-over");
                   },100); 
                   $("h1").text("Game Over,Press any key to restart");
                   startOver();
               }
           });
        }
   function note(co)
   {   $("#"+co).fadeIn(100).fadeOut(100).fadeIn(100);
       var aud=new Audio(`./sounds/${co}.mp3`);
       aud.play();
   }
   function check(){
         level++;
           $("#level-title").text("Level "+level);
          var z=Math.floor(Math.random()*4);
           b.push(a[z]);
          note(a[z]);
           
   }
   
   function startOver(){
    b=[];
    level=0;
    started=false;
    flag=0;
   }
