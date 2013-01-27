$(function(){
if($(".pagination").length != undefined){
    $(window).scroll(function(){
        var $url=$(".pagination .next_page a").attr("href");
        if ($url != undefined && $(window).scrollTop()>$(document).height()-$(window).height()-50){
            $(".pagination").text("fetching more events...");
            $.getScript($url);
            }
    })
    $(window).scroll();
}
})


/