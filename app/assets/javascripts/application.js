// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require bootstrap
//= require_tree .


function edit(){
    $(".content").each(function(){
    var a=this.firstChild;
    this.innerHTML="<input type='text' value='"+a.innerHTML+"'>";
    });	
    $(".edit").html("<p><font color = #B3B3B3>Edit</font></p>");
    $("table").append("<input type='submit'value='Save' class='btn btn-primary'><input type='submit'value='Cancel' class='btn'>");
}
$(function(){
    if($(".pagination").length != undefined){
        $(window).scroll(function(){
            var $url=$(".pagination .next_page a").attr("href");
            if ($url != undefined && $(window).scrollTop()>$(document).height()-$(window).height()-30){
                $(".pagination").text("fetching more events...");
                $.getScript($url);
            }
        })
        $(window).scroll();
    }
});
$(function(){
    $(".writecomment").click(function(){
        var commentposition = $(document).height()-$(window).height();
        window.scrollTo(0, commentposition);
    })
    $(".carousel").carousel({
        interval: 3000
    })
    $(".useralert").click(function(){
        alert("You can't vote for your own event!")    
    });
    var x = $(".noti").text();
    if(parseInt(x)==0){
        $("#noticount").hide();
    }
    $(".notification").click(function(){
        $(".noti").text("0");
        $("#noticount").hide();
        $(".notification").toggleClass("open");
    })

 })
