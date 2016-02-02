(function($) {
  $(function() {
    var jcarousel = $('.jcarousel');

    jcarousel
      .on('jcarousel:reload jcarousel:create', function () {
        var carousel = $(this),
          width = carousel.innerWidth();

        if (width >= 600) {
            width = width / 4;
        } else if (width >= 350) {
            width = width / 3;
        }

        carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
      })
      .jcarousel({
        wrap: 'circular'
      });

    $('.jcarousel-control-prev')
      .jcarouselControl({
        target: '-=1'
      });

    $('.jcarousel-control-next')
      .jcarouselControl({
        target: '+=1'
      });

    $('.jcarousel-pagination')
      .on('jcarouselpagination:active', 'a', function() {
        $(this).addClass('active');
      })
      .on('jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('active');
      })
      .on('click', function(e) {
        e.preventDefault();
      })
      .jcarouselPagination({
        perPage: 1,
        item: function(page) {
          return '<a href="#' + page + '">' + page + '</a>';
        }
      });
  });
  console.log($('#main').outerHeight(true));
  console.log($('#our-structure').outerHeight(true));
  $('.first').affix({
    offset: {
      top: function() {
        return $('#main').outerHeight(true);
      },
      bottom: function() {
        return $('#main').outerHeight(true) + $('#our-structure').outerHeight(true);
      }
    }
  });
})(jQuery);