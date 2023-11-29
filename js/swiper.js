function showDivs(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var sliderWrapper = document.querySelector('.slider-wrapper');
    var totalSlides = slides.length;

    if (n > totalSlides) { slideIndex = 1; }
    if (n < 1) { slideIndex = totalSlides; }

    var newLeft = -(slideIndex - 1) * 100; // 100% for each slide
    sliderWrapper.style.transform = 'translateX(' + newLeft + '%)';
}
