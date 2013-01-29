


$(document).ready(function(){

    
    $( ".tabs" ).tabs({ cookie: { expires: 30 } });

    var cookie = $( ".selector" ).tabs( "option", "cookie" );
  
    $( ".tabs" ).tabs( "option", "cookie", { expires: 30 } )
    
});



