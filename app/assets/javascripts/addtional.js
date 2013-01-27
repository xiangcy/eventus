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

$(function(){
    $(".writecomment").click(function(){
        var commentposition = $(document).height()-$(window).height();
        window.scrollTo(0, commentposition);
    })
})