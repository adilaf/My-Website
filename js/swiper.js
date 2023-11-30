var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var slides = document.getElementsByClassName("slide");
    var sliderWrapper = document.querySelector('.slider-wrapper');
    var totalSlides = slides.length;

    if (n > totalSlides) { slideIndex = 1; }
    if (n < 1) { slideIndex = totalSlides; }

    var newTransformValue = -(slideIndex - 1) * 100; // In percentage

    sliderWrapper.style.transform = 'translateX(' + newTransformValue + '%)';
}


//For the parallax effect
window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    var maxOffset = 200; // Maximum offset for the background image
    var backgroundPosition = Math.min(scrollPosition * 0.5, maxOffset); // Use the smaller value to limit the movement

    document.getElementById('about').style.backgroundPositionY = backgroundPosition + 'px';
});