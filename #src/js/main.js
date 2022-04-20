document.addEventListener('DOMContentLoaded', () => {

  // Sliders
  try {
    const heroSlider = new Swiper('.hero-slider', {
			spaceBetween: 30,
      loop: true,
      slidesPerView: 1,
      autoHeight: true,
      centeredSlides: true,
			autoplay: {
				delay: 3000,
			},
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  } catch (err) {}

  // Max desc length
  maxTextLength('.hero-slider__item-desc', 350)
  
  function maxTextLength(el, maxLen) {
    const descs = document.querySelectorAll(el);
    
    descs.forEach(desc => {
      let content = desc.innerHTML;
      if (content.length > maxLen) {
        content = content.slice(0, maxLen);
        desc.innerHTML = content + '...';
      }
    })
  }

})
