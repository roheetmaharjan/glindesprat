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