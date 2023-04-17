$(document).ready(function() 
{
    $("#slider").bxSlider
    ({
        auto: true,
        slideWidth: 500,
        slideMargin: 10,
        randomStart: true,
        speed:3000,
        captions: true,        
        pagerType:"short",
        pagerSelector:"#id_pager"


    });
});