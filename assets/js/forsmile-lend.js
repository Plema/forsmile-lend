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

    $('.advantages-slider').slick({
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
              rows: 2,
          }
        }
      ]
    });

    $('.doctors-slider').slick({
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    });


    if($(window).width() >= 768){

      $('.doctors-slider').slick('unslick');
      
    }

    if($(window).width() <= 1260){

      $('.benefits-item').matchHeight({
        byRow: false
      });

      $('.stages-item').matchHeight({
        byRow: false
      });
      
    }

    if($(window).width() >= 1024){

      $('.advantages-slider').slick('unslick');
      
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

    $('.doctors-slider .item').on('click', function(){
      var dataDoctors = $(this).data('doctors');
      $('.doctors-dossier').removeClass('active');
      $('.doctors-item .item').removeClass('active');
      $(this).addClass('active');
      $("." + dataDoctors ).addClass('active');
    });

    $('.quality-slider').slick({
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: '<button class="slick-arrow next"><i class="icon-right-open-big"></i></button>',
      prevArrow: '<button class="slick-arrow prev"><i class="icon-right-open-big"></i></button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              rows: 3,
          }
        }
      ]
    });

    $('.bonuses-slider').slick({
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    });

    $('.quality-item .img').matchHeight({
      byRow: false
    });

    $('.bonuses-item .text').matchHeight({
      byRow: false
    });

    if($(window).width() >= 1024){
      
      $('.bonuses-slider').slick('unslick');
      
    }

    $('.reviews-tab').on('click', function(){
      var dataTab = $(this).data('tab');
      $('.reviews-tab').removeClass('active');
      $('.reviews-item').removeClass('show');
      
      $(this).addClass('active');
      $('.' + dataTab).addClass('show');

      InitSlider(dataTab);//вызов ф-и для постороения слайдера после перехода по табам
    });

    function InitSlider(item){
    $('.' + item + ' .slide-reviews').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '560px',
        centerMode: true,
        variableWidth: false,
        responsive: [
            {
              breakpoint: 1600,
              settings: {
                  centerMode: true,
                  variableWidth: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerPadding: '360px',
                  infinite: true,
              }
            },
            {
                breakpoint: 1400,
                settings: {
                    centerMode: true,
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '380px',
                    infinite: true,
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    centerMode: true,
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '220px',
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    centerMode: true,
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '80px',
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '15px',
                    infinite: true,
                }
            },
        ]
    });
    }

    InitSlider('reviews-item1');//указываем, какой таб открыт для инициализации слайдера в нём


    $('.open-video').on('click', function () {
      console.log(0);
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

    $('.slide-our-work').slick({
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: '560px',
      centerMode: true,
      variableWidth: false,
      responsive: [
          {
            breakpoint: 1600,
            settings: {
                centerMode: true,
                variableWidth: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '360px',
                infinite: true,
            }
          },
          {
              breakpoint: 1400,
              settings: {
                  centerMode: true,
                  variableWidth: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerPadding: '380px',
                  infinite: true,
              }
          },
          {
              breakpoint: 1280,
              settings: {
                  centerMode: true,
                  variableWidth: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerPadding: '220px',
                  infinite: true,
              }
          },
          {
              breakpoint: 1024,
              settings: {
                  centerMode: true,
                  variableWidth: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerPadding: '80px',
                  infinite: true,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  centerMode: true,
                  variableWidth: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerPadding: '15px',
                  infinite: true,
              }
          },
      ]
  });

});

