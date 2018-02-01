var lunbo = {
    init: function() {
        lunbo.width();
        lunbo.hover();
    },
    width: function() {
        $('.index-nav ul li').css({
            'width': 133
        });
        $('.index-nav ul li').eq(0).css({
            width: 402
        })
    },
    hover: function() {
        $('.index-nav ul li').hover(
            function(event) {
                $(this).find('.mask_b').fadeOut(50);
                var hx = event.clientY
                $(this).css('width',400).siblings().css('width',133.3333);
            },function() {
                $(this).find('.mask_b').fadeIn(50);
                $(this).css('width',168).siblings().css('width',172);
        });
    }
}
window.onload = function() {
    lunbo.init();
}