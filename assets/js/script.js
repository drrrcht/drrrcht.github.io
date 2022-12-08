$(window).scroll(function() {
    var scroll = $(this).scrollTop();

    if (scroll > 10) {
        $('.navbar').addClass('active');
    } else {
        $('.navbar').removeClass('active');
    }

    if (scroll > 300) {
        $('.back-top').show();
    } else {
        $('.back-top').hide();
    }
});

$('.back-top').click(function(){
    $('html, body').animate({ scrollTop: 0 }, 600);
});

$('.btn').click(function(){
    $.fancybox.open({
        type: "inline",
        src: "#modal"
    }); 
});

$(".phone").mask("+7(999) 999-9999");

$('.drop').click(function(){
    $('ul', this).stop().slideToggle(400);
});
