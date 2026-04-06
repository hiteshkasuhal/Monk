$(document).ready(function () {


    document.querySelectorAll('[data-slider-config]').forEach(slider => {
      const config = JSON.parse(slider.dataset.sliderConfig);

      if (!$(slider).hasClass('slick-initialized')) {
        $(slider).slick(config);
      }
    });

});

 $(document).on("click", ".el-play-button", function (e) {
     var video = jQuery(this).parents('.el-video-wrapper').find('video');
 if (jQuery(this).hasClass("active")) {
    jQuery(this).parents('.el-video-wrapper').removeClass('active');
     jQuery(this).removeClass('active');
 video.trigger('pause');
 } else {
 video.trigger('play');
   jQuery(this).parents('.el-video-wrapper').addClass('active');
     jQuery(this).addClass('active');
 }
 });



 
jQuery(document).ready(function(){
if(navigator.userAgent.indexOf('Mac') > 0) {
jQuery('body').addClass('mac-os');
} else {
jQuery('body').addClass('window-os');
}
});

$(window).on('scroll', function () {
  let scrollTop = $(this).scrollTop();

  if (scrollTop > 30) {
    $('body').addClass('remove_transparent');
  } else {
    $('body').removeClass('remove_transparent');
  }
});



$(document).on("click", ".el-question", function (e) {
  if (jQuery(this).hasClass("active")) {
    jQuery(this).toggleClass('active');
    jQuery(this).next().slideToggle();
  } else {
    jQuery('.el-question').removeClass('active');
    jQuery('.el-question').next().slideUp();
    jQuery(this).toggleClass('active');
    jQuery(this).next().slideToggle();
  }
});



$(document).on("click", "a[href='#reviews']", function (e) {
  e.preventDefault();
  document.querySelector('#reviews').scrollIntoView({
    behavior: 'smooth'
  })
});
$(document).on("click", "a[href='#']", function (e) {
  e.preventDefault();
  document.querySelector('.el-product-label').scrollIntoView({
    behavior: 'smooth'
  })
});


$(document).on("click", ".el-mobile-menu-button", function (e) {
    $('.el-drawer-menu').addClass('active');
    $('.el-drawer-menu-bg').show();
});
$(document).on("click", ".el-mobile-menu-close", function (e) {
    $('.el-drawer-menu').removeClass('active');
    $('.el-drawer-menu-bg').hide();
});

$(document).on("click", ".el-drawer-menu-bg", function (e) {
    $('.el-drawer-menu').removeClass('active');
    $('.el-drawer-menu-bg').hide();
});


$(document).on("click", ".el-element-option-option-item-right", function (e) {
    $(this).toggleClass('active');
    $(this).next().slideToggle();
});



$(document).on("click", ".el-product-option-list-item", function (e) {
$(this).parents('.el-product-option-list-main').prev().toggleClass('active');
$(this).parents('.el-product-option-list-main').slideToggle();
var variant_id = $(this).attr('variant_id');
var variant_title = $(this).find('.el-product-option-list-title').text();
var variant_scent = $(this).find('.el-product-option-list-inspired').html();
var current_detail = $(this).parents('.el-product-option-list-main').prev();
current_detail.find('.el-product-option-title>span:first-child').text(variant_title);
current_detail.find('.el-product-option-inspired').html(variant_scent);
current_detail.find('.el-product-option').attr('variant_id',variant_id);
});


$(document).on("click", ".el-element-option", function(e) {
$(this).parents('.el-product').find('.el-element-option').removeClass('active');
$(this).addClass('active');
var data_tab = $(this).attr('data_tab');
$(this).parents('.el-product').find('.el-quantity-data').hide();
$(this).parents('.el-product').find('.el-quantity-data[data_tab="'+data_tab+'"]').show();
});


$(document).on("click", ".el-sub-toggle.active", function(e) {
$(this).removeClass('active');
var sub_tab = 1;
$(this).parents('.el-product').find('.el-sub-tab').hide();
$(this).parents('.el-product').find('.el-sub-tab[sub_tab="'+sub_tab+'"]').show();
});

$(document).on("click", ".el-sub-toggle:not(.active)", function(e) {
$(this).addClass('active');
var sub_tab = 2;
$(this).parents('.el-product').find('.el-sub-tab').hide();
$(this).parents('.el-product').find('.el-sub-tab[sub_tab="'+sub_tab+'"]').show();
});



$(document).on('click', function (e) {

  if (
    !$(e.target).closest('.el-product-option-list').length &&
    !$(e.target).closest('.el-element-option-option-item-right').length
  ) {

    $('.el-product-option-list')
      .parents('.el-product-option-list-main')
      .prev()
      .removeClass('active');

    $('.el-product-option-list')
      .parents('.el-product-option-list-main')
      .slideUp();
  }

});


$(document).on("click", "a[href='#guide']", function (e) {
  e.preventDefault();
    $('.el-drawer-guide').addClass('active');
    $('.el-drawer-guide-bg').show();
});


$(document).on("click", ".el-mobile-guide-close, .el-drawer-guide-bg", function (e) {
    $('.el-drawer-guide').removeClass('active');
    $('.el-drawer-guide-bg').hide();
});
