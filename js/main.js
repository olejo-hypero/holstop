$(document).ready(function(){

    $('.header-btn').click(function(){
      setTimeout(function(){
    $('.hidden-menu').toggleClass('menu-fixed');
    $('.header-btn').toggleClass('btn-color');
    $('body').toggleClass('body-overflow');
    },50);
  });

    $('.slider').slick({
      arrows: false,
      slidesToShow: 4,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1
            }
          }
        ]
    });

    $(function() {
            $('.photo-slider').slick({
                arrows: true,
                slidesToShow: 4,
                autoplay: true,
                autoplaySpeed: 3000,
                draggable: true,
                rows: 2,
                slidesPerRow: 1,
                slidesToScroll: 1,
                responsive: [
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    rows: 1,
                    arrows: false
                  }
                }
              ]
          });

          //   $('.kollaj-slider').slick({
          //       arrows: true,
          //       slidesToShow: 4,
          //       autoplay: true,
          //       autoplaySpeed: 3000,
          //       draggable: true,
          //       rows: 2,
          //       slidesPerRow: 1,
          //       slidesToScroll: 1,
          //       responsive: [
          //       {
          //         breakpoint: 991,
          //         settings: {
          //           slidesToShow: 3
          //         }
          //       },
          //       {
          //         breakpoint: 768,
          //         settings: {
          //           slidesToShow: 2
          //         }
          //       },
          //       {
          //         breakpoint: 480,
          //         settings: {
          //           slidesToShow: 1
          //         }
          //       }
          //     ]
          // });

          //   $('.digital-slider').slick({
          //       arrows: true,
          //       slidesToShow: 4,
          //       autoplay: true,
          //       autoplaySpeed: 3000,
          //       draggable: true,
          //       rows: 2,
          //       slidesPerRow: 1,
          //       slidesToScroll: 1,
          //       responsive: [
          //       {
          //         breakpoint: 991,
          //         settings: {
          //           slidesToShow: 3
          //         }
          //       },
          //       {
          //         breakpoint: 768,
          //         settings: {
          //           slidesToShow: 2
          //         }
          //       },
          //       {
          //         breakpoint: 480,
          //         settings: {
          //           slidesToShow: 1
          //         }
          //       }
          //     ]
          // });

          //   $('.popart-slider').slick({
          //       arrows: true,
          //       slidesToShow: 4,
          //       autoplay: true,
          //       autoplaySpeed: 3000,
          //       draggable: true,
          //       rows: 2,
          //       slidesPerRow: 1,
          //       slidesToScroll: 1,
          //       responsive: [
          //       {
          //         breakpoint: 991,
          //         settings: {
          //           slidesToShow: 3
          //         }
          //       },
          //       {
          //         breakpoint: 768,
          //         settings: {
          //           slidesToShow: 2
          //         }
          //       },
          //       {
          //         breakpoint: 480,
          //         settings: {
          //           slidesToShow: 1
          //         }
          //       }
          //     ]
          // });

          //   $('.vekt-slider').slick({
          //       arrows: true,
          //       slidesToShow: 4,
          //       autoplay: true,
          //       autoplaySpeed: 3000,
          //       draggable: true,
          //       rows: 2,
          //       slidesPerRow: 1,
          //       slidesToScroll: 1,
          //       responsive: [
          //       {
          //         breakpoint: 991,
          //         settings: {
          //           slidesToShow: 3
          //         }
          //       },
          //       {
          //         breakpoint: 768,
          //         settings: {
          //           slidesToShow: 2
          //         }
          //       },
          //       {
          //         breakpoint: 480,
          //         settings: {
          //           slidesToShow: 1
          //         }
          //       }
          //     ]
          // });



            $('.js-tabs-item:not(:first)').hide();
            $('.js-tabs-link').on('click', function (e) {
                  e.preventDefault();
                  var tabLink = $(this);
                  var target = $(this.hash);

                  $('.js-tabs-text').removeClass('active');
                  $('.js-tabs-item:visible').fadeOut("1000", function () {
                        tabLink.children().addClass('active');
                        target.fadeIn("1000", function() {
                        $('.photo-slider').slick("reinit"); // Add reinit method
                        // $('.digital-slider').slick("reinit"); // Add reinit method
                        // $('.kollaj-slider').slick("reinit"); // Add reinit method
                        // $('.popart-slider').slick("reinit"); // Add reinit method
                        });
                  });
            });
      });


      $('.tabs-list li a').on('click', function(){
          $('li a.current').removeClass('current');
          $(this).addClass('current');
      });


      (function($) {
        $(function() {

          $('.up').click(function() {
            $('html, body').animate({scrollTop: 0},800);
            return false;
          })
        })
    })(jQuery);




});