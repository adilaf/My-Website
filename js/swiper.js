function plusDivs(n) {
  var sliderWrapper = document.querySelector('.slider-wrapper');
  var slideWidth = sliderWrapper.scrollWidth / slides.length; // Width of each slide
  slideIndex += n;

  if (slideIndex > slides.length) { slideIndex = 1; }
  if (slideIndex < 1) { slideIndex = slides.length; }

  sliderWrapper.scrollTo({
      left: slideWidth * (slideIndex - 1),
      behavior: 'smooth'
  });
}
