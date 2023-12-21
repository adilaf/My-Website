
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
    var backgroundPosition = scrollPosition * -0.45; // Adjust the 0.5 to control the speed of the movement
    document.getElementById('about').style.backgroundPositionY = backgroundPosition + 'px';
    document.getElementById('current').style.backgroundPositionY = backgroundPosition + 'px';
});

