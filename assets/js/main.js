
!(function($) {
  "use strict";

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  $('.navbar-toggler').click(function(event){
    $(this).parents('#header').toggleClass('opened');  
    $('.bar').toggleClass('animate');
    $('body').toggleClass('bodyfreeze');
    event.preventDefault();
});
if ($(window).width() < 767) {
$('.footer-links h4').click(function(event){
  $(this).parents('.footer-links').toggleClass('opened'); 
  event.preventDefault();
});
}
$('.promotionalbanner .closepromo').click(function(){
  $(this).parents('.promotionalbanner').remove();
});
  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  }); 

   $(".event-details-carousel").owlCarousel({
    autoplay: false,
    loop:false,
    margin: 20,
    responsiveClass: true,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 2
      },
  
      1024: {
        items: 3
      },
  
      1366: {
        items: 4
      }
    }
  });
  $(".funcBatchCarousel").owlCarousel({
    autoplay: false,
    loop:false,
    margin: 20,
    responsiveClass: true,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 2
      },
  
      1024: {
        items: 3
      },
  
      1280: {
        items: 4
      }
    }
  });
  $(".funcDSACarousel").owlCarousel({
    autoplay: false,
    loop:false,
    margin: 20,
    responsiveClass: true,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 2
      }
    }
  });
  $(".funcMMTabCarousel").owlCarousel({
    autoplay: false,
    loop:false,
    margin: 20,
    responsiveClass: true,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 2
      }
    }
  });
  $(".news-details-carousel").owlCarousel({
    autoplay: false,
    loop:false,
    margin: 20,
    responsiveClass: true,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 2
      }, 
      1366: {
        items: 2
      }
    }
  });
  $(".eventpage-carousel").owlCarousel({
    autoplay: false,
    loop: false,
    items: 1,
    dots: true  
  });
  $(".successstory-carousel").owlCarousel({
    autoplay: false,
    loop: false,
    items: 1,
    dots: true  
  });
  $(".funcStudentsay").owlCarousel({
    autoplay: false,
    loop: false,
    items: 1,
    dots: true  
  });
  
  $(".whydocourse-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    items: 1,
    dots: true  
  });
  
  var sync1 = jQuery("#sync1");
  var sync2 = jQuery("#sync2");
  var slidesPerPage = 5; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1
    .owlCarousel({
    items: 1,
    nav: false,
   // animateIn: "fadeIn",
    dots: false,
    loop: true,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        item: 1
      },
      600: {
        items: 1
      }
    },
    responsiveRefreshRate: 200
  })
    .on("changed.owl.carousel", syncPosition);

  sync2
    .on("initialized.owl.carousel", function() {
    sync2
      .find(".owl-item")
      .eq(0)
      .addClass("current");
  })
    .owlCarousel({
    items: slidesPerPage,
    rtl:true,
    dots: false,
    nav: true,
    autoplay: true,
    slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
    responsiveRefreshRate: 100,
    navText: [
      '<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>',
      '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'
    ]
  })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;

    //if you disable loop you have to comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }

    //end block

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find(".owl-item.active").length - 1;
    var start = sync2
    .find(".owl-item.active")
    .first()
    .index();
    var end = sync2
    .find(".owl-item.active")
    .last()
    .index();

    if (current > end) {
      sync2.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      sync2.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      sync1.data("owl.carousel").to(number, 100, true);
    }
  }

  sync2.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = jQuery(this).index();
    sync1.data("owl.carousel").to(number, 300, true);
  });
 
	$(".megamenu").on("click", function(e) {
		e.stopPropagation();
	});
  // Reference the tab links.
	const tabLinks = $('.mmtabgroup li a');	
	// Handle link clicks.
	tabLinks.click(function(event) {
    		var $this = $(this);		
		// Prevent default click behaviour.
		event.preventDefault();		
		// Remove the active class from the active link and section.
		$('.mmtabgroup a.active, div.active').removeClass('active');		
		// Add the active class to the current link and corresponding section.
		$this.addClass('active');
		$($this.attr('href')).addClass('active');
	});

  
//   $('.mmtoggle').click(function(e) {
//   	e.preventDefault();
  
//     let $this = $(this);
  
//     if ($this.next().hasClass('show')) {
//         $this.next().removeClass('show');
//         $this.next().slideUp(350);
//     } else {
//         $this.parent().parent().find('.mmacccard .mmaccpaninner').removeClass('show');
//         $this.parent().parent().find('.mmacccard .mmaccpaninner').slideUp(350);
//         $this.next().toggleClass('show');
//         $this.next().slideToggle(350);
//     }
// });
  

    // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);