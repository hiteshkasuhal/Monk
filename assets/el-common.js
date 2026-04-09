$(document).on("click", ".question_product,.custom_icons_faq_main .icons_with_text_item_title", function (e) {
  if (jQuery(this).hasClass("active")) {
    jQuery(this).toggleClass('active');
    jQuery(this).next().slideToggle();
  } else {
    jQuery('.question_product,.custom_icons_faq_main .icons_with_text_item_title').removeClass('active');
    jQuery('.question_product,.custom_icons_faq_main .icons_with_text_item_title').next().slideUp();
    jQuery(this).toggleClass('active');
    jQuery(this).next().slideToggle();
  }
});


$(document).on("click", ".faq_question", function (e) {
  if (jQuery(this).hasClass("active")) {
    jQuery(this).toggleClass('active');
    jQuery(this).next().slideToggle();
  } else {
    jQuery('.faq_question').removeClass('active');
    jQuery('.faq_question').next().slideUp();
    jQuery(this).toggleClass('active');
    jQuery(this).next().slideToggle();
  }
});
$(document).on("click", ".faq_question_new_main", function (e) {
  if (jQuery(this).hasClass("active")) {
    jQuery(this).find('.faq_question_text').toggleClass('active');
    jQuery(this).toggleClass('active');
    jQuery(this).next().slideToggle();
  } else {
    jQuery('.faq_question_new_main').removeClass('active');
    jQuery('.faq_question_text').removeClass('active');
    jQuery('.faq_question_new_main').next().slideUp();
    jQuery(this).toggleClass('active');
    jQuery(this).find('.faq_question_text').toggleClass('active');
    jQuery(this).next().slideToggle();
  }
});




 $(document).on("click", ".custom_button", function (e) {
     var video = jQuery(this).parents('.video_wrapper_custom').find('video');
 if (jQuery(this).hasClass("active")) {
    jQuery(this).parents('.video_wrapper_custom').removeClass('video-active');
     jQuery(this).removeClass('active');
 video.trigger('pause');
 } else {
 video.trigger('play');
   jQuery(this).parents('.video_wrapper_custom').addClass('video-active');
     jQuery(this).addClass('active');
 }
 });








$(document).on("click", "a[href='#reviews']", function (e) {
  e.preventDefault();
  document.querySelector('#reviews').scrollIntoView({
    behavior: 'smooth'
  })
});
$(document).on("click", "a[href='#faqs']", function (e) {
  e.preventDefault();
  document.querySelector('#faqs').scrollIntoView({
    behavior: 'smooth'
  })
});

$(document).on("click", "a[href='#result']", function (e) {
  e.preventDefault();
  document.querySelector('#results').scrollIntoView({
    behavior: 'smooth'
  })
});

$(document).on("click", "a[href='#results']", function (e) {
  e.preventDefault();
  document.querySelector('#results').scrollIntoView({
    behavior: 'smooth'
  })
});
$(document).on("click", "a[href='#portfolio']", function (e) {
  e.preventDefault();
  document.querySelector('#portfolio').scrollIntoView({
    behavior: 'smooth'
  })
});
$(document).on("click", "a[href='#services']", function (e) {
  e.preventDefault();
  document.querySelector('#services').scrollIntoView({
    behavior: 'smooth'
  })
});
$(document).on("click", "a[href='#careers']", function (e) {
  e.preventDefault();
  document.querySelector('#careers').scrollIntoView({
    behavior: 'smooth'
  })
});



jQuery(document).ready(function(){
if(navigator.userAgent.indexOf('Mac') > 0) {
jQuery('body').addClass('mac-os');
} else {
jQuery('body').addClass('window-os');
}
});
$(document).ready(function () {

  var $items = $('.pdp_ingredients_list1 .icons_with_text_flex .icons_with_text_item');
  var $slider = $('.right_slider_ingredients');

  // set first active
  $items.removeClass('active');
  $items.eq(0).addClass('active');
  // SLIDER → update active item
  $slider.on('afterChange', function (event, slick, currentSlide) {
    $items.removeClass('active');
    $items.eq(currentSlide).addClass('active');
  });

  // CLICK → go to slide
  $items.on('click', function () {

    var index = $(this).index();

    $items.removeClass('active');
    $(this).addClass('active');

    $slider.slick('slickGoTo', index);

  });

});
function isAtViewportMidline(el) {
  if (!el || !el.getBoundingClientRect) return false;
  if (!$(el).is(':visible')) return false;

  const rect = el.getBoundingClientRect();
  const vw = window.innerWidth || document.documentElement.clientWidth;
  const vh = window.innerHeight || document.documentElement.clientHeight;
  const midY = vh / 2;

  // horizontally on-screen AND the element spans the middle line
  return rect.left < vw && rect.right > 0 && rect.top < midY && rect.bottom > midY;
}

function runCounters($block) {
  $block.addClass('start_count');
  $block.find('.count_js').each(function () {
    const $c = $(this);
    const target = +($c.data('value') || 0);
    $c.prop('Counter', 0).stop(true).animate(
      { Counter: target },
      {
        duration: 2000,
        easing: 'swing',
        step: function (now) { $c.text(Math.ceil(now)); }
      }
    );
  });
}

function checkCountersInView() {
  $('.custom_counter .icons_with_text_flex').each(function () {
    const $block = $(this);
    if ($block.hasClass('start_count')) return;          // only once
    if (isAtViewportMidline(this)) runCounters($block); // trigger when truly visible
  });
}

$(window).on('scroll load', checkCountersInView);




$(document).on("click", ".tab_item_pdp", function (e) {
var data_tab = $(this).attr('data_tab');
$('.tab_item_pdp').removeClass('active');
$(this).addClass('active');
$('.tab_content_pdp').hide();
$('.tab_content_pdp[data_tab="'+data_tab+'"]').show();
});


$(document).on("click", '.product_slider_custom_slider_button a.custom_hk_button, .ajax_add_cart ', function(e) {
 e.preventDefault(); 
var this_element =  jQuery(this);
this_element.addClass('loading_hk');
var id = jQuery(this).attr('variant_id');
jQuery.ajax({
type: 'POST',
url: '/cart/add.js',
data: {
  quantity: 1,
  id: id
},
  dataType: 'json', 
 success: function (data) { 
    $.get(window.location.pathname, function (res) {
      var $new = $(res).find('#cart_drawer_content');
      $('#cart_drawer_content').replaceWith($new);
         // Update cart count
      const $newCartCount = $(res).find('.cart_count_js');
      const cartCount = parseInt($newCartCount.text().trim(), 10);
      
      if (cartCount > 0) {
        $('.cart_count_js').text(cartCount).show();
      } else {
        $('.cart_count_js').text('').hide();
      }
      $('#cart-drawer').removeClass('is_empty').addClass('open');
      $('.custom_overlay2').addClass('active');
      this_element.removeClass('loading_hk');
    });
 } 
 });
  });



   $(window).scroll(function(){
      if ($(this).scrollTop() > 30) {
         $('body').addClass('remove_transparent');
      } else {
         $('body').removeClass('remove_transparent');
      }
  });


  function isScrolledIntoView2(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
docViewBottom = docViewBottom-($(window).height()/2)+($(elem).height())+100;
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom));
}

$(window).scroll(function () {
    $('.pdp_skin_list1 .icons_with_text_flex .icons_with_text_item').each(function () {
        if (isScrolledIntoView2(this) === true) {
            $(this).addClass('active');
        } else {
          $(this).removeClass('active');
        }
    });
});










$(document).on("click", "a[href='#show']", function (e) {
  e.preventDefault();
$(this).parents('.container_hk').find('.PDP_non_text1_half').hide();
$(this).parents('.container_hk').find('.PDP_non_text1_full').css('display','flex');
});

$(document).on("click", "a[href='#hide']", function (e) {
  e.preventDefault();
$(this).parents('.container_hk').find('.PDP_non_text1_full').hide();
$(this).parents('.container_hk').find('.PDP_non_text1_half').css('display','flex');
});
$(document).on("click", ".trigger_reviews_js_show", function (e) {
$('.review_with_text_landing_page_item.active').last().next().show();
$('.review_with_text_landing_page_item.active').last().next().next().show();
$('.review_with_text_landing_page_item.active').last().next().next().next().show();
$('.review_with_text_landing_page_item.active').last().next().addClass('active');
$('.review_with_text_landing_page_item.active').last().next().addClass('active');
$('.review_with_text_landing_page_item.active').last().next().addClass('active');
});

$(document).on("click", ".trigger_reviews_js_hide", function (e) {
$('.review_with_text_landing_page_item:nth-child(6)~.review_with_text_landing_page_item').hide().removeClass('active');
});



$(document).on("click", '.review_static_tab', function (e) {
$('.review_static_tab').removeClass('active');
$(this).addClass('active');
var data_tab = $(this).attr('data_tab');
$('.review_static_custom_static_new_item_inner').removeClass('active');
$('.review_static_custom_static_new_item_inner[data_tab="'+data_tab+'"]').addClass('active');
});




$(document).on("click", '.review_slider_custom_slider_new_item_bg', function (e) {
  if (jQuery(this).hasClass("active")) {
$('.review_slider_custom_slider_new_item_bg').removeClass('active');
$(this).find('.review_slider_custom_slider_bottom').slideToggle();

  } else {
$('.review_slider_custom_slider_new_item_bg').removeClass('active');
$(this).addClass('active');
$('.review_slider_custom_slider_bottom').hide();
$(this).find('.review_slider_custom_slider_bottom').slideToggle();
  }
});