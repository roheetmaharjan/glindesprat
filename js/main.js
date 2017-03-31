$(document).ready(function () {

    $('.btn-vertical-slider').on('click', function () {
        
        if ($(this).attr('data-slide') == 'next') {
            $('#myCarousel').carousel('next');
        }
        if ($(this).attr('data-slide') == 'prev') {
            $('#myCarousel').carousel('prev')
        }

    });
});



$(document).ready(function(){
  $('.slider8').bxSlider({
    mode: 'vertical',
    minSlides: 4,
    slideMargin: 5,
    auto: true,
    pager: false,
    nextSelector: '#slider-next',
    prevSelector: '#slider-prev',
    nextText: '>',
    prevText: '<'
  });
});

$(function(){
    $(".dropdown").hover(            
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            });
    });

$("#dropdown").change(function(){
    $("#receiver").val($(this).val());
});
$("#dropdown2").change(function(){
    $("#receiver2").val($(this).val());
});