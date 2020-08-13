$(document).ready(function(){

    $('.implantation-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1260,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
          }
        ]
    });

    $('.implantation-item').matchHeight({
      byRow: false
    });

    $('.benefits-slider').slick({
      dots: true,
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          }
        }
      ]
    });

    $('.stages-slider').slick({
      dots: true,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          }
        }
      ]
    });

    

    if($(window).width() <= 1260){

      $('.benefits-item').matchHeight({
        byRow: false
      });

      $('.stages-item').matchHeight({
        byRow: false
      });
      
    }
    if($(window).width() >= 1260){

      $('.implantation-item .text').matchHeight({
        byRow: false
      });

      $('.benefits-slider').slick('unslick');

      $('.stages-slider').slick('unslick');

      $('.stages-item').matchHeight({
        byRow: false
      });
      
    }

    $('.open-video').on('click', function () {
      $(".modall-video").addClass('active');
      $('.body').addClass('showing-modal');
      $('.body-cloze').show();
      //insert video into popup
      var video = $(this).find('.videoContent').attr('data-video');
      var videoWrap = '<iframe width="854" height="480" src="' + video + '" autoplay=1> </iframe>';
      $('#videoBody').html(videoWrap);
    });

    $(".modall-video").on('click', function () {
        $(".modall-video").removeClass('active');
        $('.body-cloze').hide();
        $('.body').removeClass('showing-modal');
    });
    
    $(".modall-video").find('.modall-body').click(function (event) {
        event.stopPropagation();
    });

});
