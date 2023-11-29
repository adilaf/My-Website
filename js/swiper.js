function updateSlidePosition() {
  var slides = document.getElementsByClassName("slide");
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.transform = 'translateX(' + (-slideIndex * 100) + '%)';
  }
}

function showDivs(n) {
  var totalSlides = document.getElementsByClassName("slide").length;
  if (n > totalSlides) { slideIndex = 1; }
  if (n < 1) { slideIndex = totalSlides; }
  updateSlidePosition();
}

// Initialize the slider
showDivs(slideIndex);
