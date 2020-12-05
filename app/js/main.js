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

    $('.single-page__tabs .tab, .profile__tabs .tab,.settings-page__tabs .tab').on('click', function(event) {
      var id = $(this).attr('data-id');
        $('.single-page__tabs, .profile__tabs, .settings-page__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.single-page__tabs .tabs, .profile__tabs .tabs, .settings-page__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#'+id).addClass('active-tab').fadeIn();
        return false;
      });

      $('input[type="file"], select').styler();












  var mixer = mixitup('.product__inner-items');   
});