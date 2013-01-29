$(document).ready(function(){

  $("#slidingItems li:not(:first)").css("display","none");
  var lastList=$("#slidingItems li:last");
  var firstList=$("#slidingItems li:first");
  setInterval(function(){

  if(lastList.is(":visible")){
    firstList.fadeIn(500).addClass("in");
    lastList.hide();
  }

  else{

    $("#slidingItems li:visible").addClass("in");
    $("#slidingItems li.in").next().fadeIn(500);
    $("li.in").hide().removeClass("in")}

  },3000)
  
});
