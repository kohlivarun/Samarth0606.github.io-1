
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

  //------------------- adding for online cards------------------------
   // ------------------------------------for online cards-----------------------------------------------
   $(function() {
    $("[name=rdCourseType1]").each(function(i) {
        $(this).change(function(){
          $('#premiumLite-1, #premiumLite-2').hide();
            var divId = 'premiumLite-' + $(this).val();
            $("#"+divId).show();
        });
    });
    $("[name=rdCourseType2]").each(function(i) {
      $(this).change(function(){
        $('#premiumLite-3, #premiumLite-4').hide();
          var divId = 'premiumLite-' + $(this).val();
          $("#"+divId).show();
      });
  });
  $("[name=rdCourseType3]").each(function(i) {
    $(this).change(function(){
      $('#premiumLite-5, #premiumLite-6').hide();
        var divId = 'premiumLite-' + $(this).val();
        $("#"+divId).show();
    });
});
// ----------------samarth added from here------
$("[name=rdCourseType4]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-7, #premiumLite-8').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

$("[name=rdCourseType5]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-9, #premiumLite-10').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

$("[name=rdCourseType6]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-11, #premiumLite-12').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

$("[name=rdCourseType7]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-13, #premiumLite-14').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

$("[name=rdCourseType8]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-15, #premiumLite-16').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

// dsa ended here

// competitive started here
$("[name=rdCourseType9]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-17, #premiumLite-18').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

$("[name=rdCourseType10]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-19, #premiumLite-20').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

$("[name=rdCourseType11]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-21, #premiumLite-22').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});


$("[name=rdCourseType12]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-23, #premiumLite-24').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

$("[name=rdCourseType13]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-25, #premiumLite-26').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

$("[name=rdCourseType14]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-27, #premiumLite-28').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

$("[name=rdCourseType15]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-29, #premiumLite-30').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

$("[name=rdCourseType16]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-31, #premiumLite-32').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});



// competitve ended here

// interview starts here
$("[name=rdCourseType17]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-33, #premiumLite-34').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

$("[name=rdCourseType18]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-35, #premiumLite-36').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

$("[name=rdCourseType19]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-37, #premiumLite-38').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

$("[name=rdCourseType20]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-39, #premiumLite-40').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

$("[name=rdCourseType21]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-41, #premiumLite-42').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

$("[name=rdCourseType22]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-43, #premiumLite-44').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

// addig non coding here

$("[name=rdCourseType50]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-99, #premiumLite-100').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});
$("[name=rdCourseType51]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-101, #premiumLite-102').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});


// interview ends here

// webdev starts here 
$("[name=rdCourseType23]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-45, #premiumLite-46').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});
$("[name=rdCourseType24]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-47, #premiumLite-48').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

$("[name=rdCourseType25]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-49, #premiumLite-50').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

$("[name=rdCourseType26]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-51, #premiumLite-52').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

$("[name=rdCourseType27]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-53, #premiumLite-54').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

$("[name=rdCourseType28]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-55, #premiumLite-56').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

$("[name=rdCourseType29]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-57, #premiumLite-58').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

$("[name=rdCourseType30]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-59, #premiumLite-60').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

$("[name=rdCourseType31]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-61, #premiumLite-62').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

$("[name=rdCourseType32]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-63, #premiumLite-64').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

$("[name=rdCourseType33]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-65, #premiumLite-66').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

$("[name=rdCourseType34]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-67, #premiumLite-68').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

// web dev ends here

// android starts here
$("[name=rdCourseType35]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-69, #premiumLite-70').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

// adding in between
$("[name=rdCourseType48]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-95, #premiumLite-96').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});
// starting kotlin
$("[name=rdCourseType36]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-71, #premiumLite-72').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});
// adding in between of kotlin
$("[name=rdCourseType49]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-97, #premiumLite-98').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});


// android ends here

// ml and ds starts herre
$("[name=rdCourseType37]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-73, #premiumLite-74').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

$("[name=rdCourseType38]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-75, #premiumLite-76').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

$("[name=rdCourseType39]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-77, #premiumLite-78').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

$("[name=rdCourseType40]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-79, #premiumLite-80').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

$("[name=rdCourseType41]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-81, #premiumLite-82').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

$("[name=rdCourseType42]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-83, #premiumLite-84').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

$("[name=rdCourseType43]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-85, #premiumLite-86').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

$("[name=rdCourseType44]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-87, #premiumLite-88').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

$("[name=rdCourseType45]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-89, #premiumLite-90').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

$("[name=rdCourseType46]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-91, #premiumLite-92').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

$("[name=rdCourseType47]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-93, #premiumLite-94').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});


// ml and dl ends here

// micro starts here
$("[name=rdCourseType52]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-103, #premiumLite-104').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});
$("[name=rdCourseType53]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-105, #premiumLite-104').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});
$("[name=rdCourseType54]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-107, #premiumLite-104').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});
$("[name=rdCourseType55]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-109, #premiumLite-104').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});
$("[name=rdCourseType56]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-111, #premiumLite-104').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});
$("[name=rdCourseType57]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-113, #premiumLite-104').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});
$("[name=rdCourseType58]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-115, #premiumLite-104').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});
$("[name=rdCourseType59]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-117, #premiumLite-104').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});
$("[name=rdCourseType60]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-119, #premiumLite-104').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});
$("[name=rdCourseType61]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-121, #premiumLite-104').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});
$("[name=rdCourseType62]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-123, #premiumLite-104').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});
$("[name=rdCourseType63]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-125, #premiumLite-104').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});
$("[name=rdCourseType64]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-127, #premiumLite-104').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});
$("[name=rdCourseType65]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-129, #premiumLite-104').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});
$("[name=rdCourseType66]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-131, #premiumLite-104').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});
$("[name=rdCourseType67]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-133, #premiumLite-104').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});
$("[name=rdCourseType68]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-135, #premiumLite-104').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});
$("[name=rdCourseType69]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-137, #premiumLite-104').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});
$("[name=rdCourseType70]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-139, #premiumLite-104').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});
$("[name=rdCourseType71]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-141, #premiumLite-104').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});
$("[name=rdCourseType72]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-143, #premiumLite-104').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});
$("[name=rdCourseType73]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-145, #premiumLite-104').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});
$("[name=rdCourseType74]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-147, #premiumLite-104').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});
$("[name=rdCourseType75]").each(function(i) {
  $(this).change(function(){
    $('#premiumLite-149, #premiumLite-104').hide();
      var divId = 'premiumLite-' + $(this).val();
      $("#"+divId).show();
  });
});

// micro ends here




 });
// -----------------------------------------------------------------

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