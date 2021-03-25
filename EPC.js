(function($) {
  $(document).ready(function() {
    $(".hide1").hide();
    $(".hide2").hide();
    $(".hide3").hide();
    $(".hide4").hide();
    $(".hide5").hide();
    $(".hide6").hide();
    $(".hide7").hide();
    $(".demo1").mouseover(function() {
      $(".hide1").show("slide", {direction: "left" }, 2000 );
    });
    $(".demo2").mouseover(function() {
      $(".hide2").show("slide", {direction: "right" }, 2000 );
    });
    $(".demo3").mouseover(function() {
      $(".hide3").show("slide", {direction: "left" }, 2000 );
    });
    $(".demo4").mouseover(function() {
      $(".hide4").show("slide", {direction: "right" }, 2000 );
    });
    $(".demo5").mouseover(function() {
      $(".hide5").show("slide", {direction: "left" }, 2000 );
    });
    $(".demo6").mouseover(function() {
      $(".hide6").show("slide", {direction: "right" }, 2000 );
    });
    $(".demo7").mouseover(function() {
      $(".hide7").show();
    });
    $(".menu1, .menu2, .menu3, .menu4").mouseover(function(){
      $(this).addClass("menuitems1");
    });
    $(".menu1, .menu2, .menu3, .menu4").mouseout(function(){
      $(this).removeClass("menuitems1");
    });
    $(".firstparappt").hide();
    $(".firstimageppt").show(function() {
    $(".firstparappt").fadeIn(3000);
    });
    var slideIndex = 0;
    showSlides();
    function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000);
    }
    $("#formsearch").hide();
    $( "input" ).click (function() { 
      if($('#check').prop("checked")){
        $("#formsearch").show();
      }   
       else{
      $("#formsearch").hide();
      } 
    });
    $("#form1").attr("disabled","disabled" );
    var str = $("#form").val();
    if(str != null) { 
      $("#form").on('keypress',function () {
        $("#form1").removeAttr("disabled");
      });
    } 
    else {
       $("#form1").attr("disabled", "disabled");
    }
  });
})(jQuery);g