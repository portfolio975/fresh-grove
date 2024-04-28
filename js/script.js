jQuery(".sp-header__nav-button").on("click", function() {
  jQuery(this).toggleClass("is-checked");
  jQuery(".sp-nav").toggleClass("is-open");
});

jQuery(".sp-nav__link").on("click", function() {
  jQuery(".sp-header__nav-button").removeClass("is-checked");
  jQuery(".sp-nav").removeClass("is-open");
});

// タブ切り替え
jQuery(".values__tab-item2").on("click", function() {
  jQuery(".values__tab-item1").addClass("values__tab-item1-bg-color");
  jQuery(".values__tab-content1").addClass("values__tab-content1-close");
  jQuery(".values__tab-item2").addClass("values__tab-item2-bg-color");
  jQuery(".values__tab-content2").addClass("values__tab-content2-show");
});

jQuery(".values__tab-item1").on("click", function() {
  jQuery(".values__tab-item1").removeClass("values__tab-item1-bg-color");
  jQuery(".values__tab-content1").removeClass("values__tab-content1-close");
  jQuery(".values__tab-item2").removeClass("values__tab-item2-bg-color");
  jQuery(".values__tab-content2").removeClass("values__tab-content2-show");
});

// spサポート例のスライド
jQuery(".values-sp__arrow-img-down1").on("click", function() {
  jQuery(".values-sp__slide-block1").slideDown(500);
  jQuery(".values-sp__arrow-img-down1").addClass("values-sp__arrow-img-down1-hidden");
  jQuery(".values-sp__arrow-img-up1").addClass("values-sp__arrow-img-up1-show");
});

jQuery(".values-sp__arrow-img-up1").on("click", function() {
  jQuery(".values-sp__slide-block1").slideUp(500);
  jQuery(".values-sp__arrow-img-down1").removeClass("values-sp__arrow-img-down1-hidden");
  jQuery(".values-sp__arrow-img-up1").removeClass("values-sp__arrow-img-up1-show");
});


jQuery(".values-sp__arrow-img-down2").on("click", function() {
  jQuery(".values-sp__slide-block2").slideDown(500);
  jQuery(".values-sp__arrow-img-down2").addClass("values-sp__arrow-img-down2-hidden");
  jQuery(".values-sp__arrow-img-up2").addClass("values-sp__arrow-img-up2-show");
});

jQuery(".values-sp__arrow-img-up2").on("click", function() {
  jQuery(".values-sp__slide-block2").slideUp(500);
  jQuery(".values-sp__arrow-img-down2").removeClass("values-sp__arrow-img-down2-hidden");
  jQuery(".values-sp__arrow-img-up2").removeClass("values-sp__arrow-img-up2-show");
});

// jQuery(".values-sp__arrow-img-down2").on("click", function() {
//   jQuery(".values-sp__slide-block2").slideToggle(500);
// });

// FAQのアコーディオンメニュー
jQuery(".faq__box").on("click", function() {
  jQuery(this).children(".faq__box-a").slideToggle();
  jQuery(this).find(".faq__box-open-svg").toggleClass("faq__box-open-svg-hidden");
  jQuery(this).find(".faq__box-close-svg").toggleClass("faq__box-close-svg-show");
});

// スムーススクロール
jQuery('a[href^="#"]').on("click", function(e) {
  const speed = 300;
  const id = jQuery(this).attr("href");
  const target = jQuery("#" == id ? "html" : id);
  const position = jQuery(target).offset().top;
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing" //swing or linear
  );
});