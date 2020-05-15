/* INTERACTIVE 1 PROJECT B HOVER REFERENCE-----------
$(document).ready(function(){
    
	$(".rosebuds").on({
            scrollHeight : function() {
              $(".rosebuds").addClass("active");
            },
            scrollHeight : function() {
              $(".rosebuds").removeClass("active");
            }
          });
    
    /*SCROLL EFFECT REFERENCE---------
    
    $(window).scroll(function(){
        $(".top").css("opacity", 1 - $(window).scrollTop() / 250);
      });
      
    ----------------*/
    

/* CODEPEN REFERENCE -----------*/

document.addEventListener( 'DOMContentLoaded', function () {
  var root = document.body.style;
  console.log(root);

  // Initialize variables
  root.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));

  // Scroll events
  window.addEventListener('scroll',scroll,false);
  function scroll() {
    root.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }
});


