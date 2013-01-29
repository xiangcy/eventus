


$(document).ready(function(){
  
  
  
  if ($.cookie("lastTab")!=undefined){
    console.log($(this).attr('href'));
    //$(this).load($.cookie("lastTab"));
    //$('.selector').tabs('option', 'selected', 3);
  }


  $("a").click(function(){
    var cok = $.cookie("lastTab", $(this).attr('href'), { expires: 7 });
    console.log(cok);
  });
    
});
