$(document).ready(function() 
{
    $("#slider").bxSlider
    ({
        auto:true,
        randomStart:true,
        mode: 'fade',
        captions: true,     
        pagerType:"short",
        pagerSelector:"#pager",
        adaptiveHeight: true,
        controls:true,
        slideWidth:600

    });
});