$(document).ready(function(){
  $(".about-button").click(function(){
    $("body").addClass("about-opened");
  });
  $(".close-about-button").click(function(){
    $("body").removeClass("about-opened");
  });
});
