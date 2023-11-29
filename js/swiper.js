var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var sliderWrapper = document.querySelector('.slider-wrapper'); // Corrected selector
    var totalSlides = slides.length;

    if (n > totalSlides) { slideIndex = 1; }
    if (n < 1) { slideIndex = totalSlides; }

    // Calculate new margin
    var newMarginLeft = -(slideIndex - 1) * 100; // This will be in percentage

    // Apply new margin to slider wrapper
    sliderWrapper.style.transform = 'translateX(' + newMarginLeft + '%)'; // Using transform for sliding effect
}

