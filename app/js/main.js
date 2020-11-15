$(function(){


      $(".rate-star").rateYo({
        rating: 5,
        starWidth: '14px'
      });


     
      $('.week__inner-items').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true
      });
      

      $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
    });

    $('.icon-list').on('click', function(){
     $('.product__inner-item').addClass('list');
     $('.icon-list').addClass('active');
     $('.icon-view-tile').removeClass('active');
    });
    $('.icon-view-tile').on('click', function(){
      $('.product__inner-item').removeClass('list');
      $('.icon-view-tile').addClass('active');
      $('.icon-list').removeClass('active');
    });

    












  var mixer = mixitup('.product__inner-items');   
});