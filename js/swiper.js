var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var totalSlides = slides.length;

    if (n > totalSlides) { slideIndex = 1 }
    if (n < 1) { slideIndex = totalSlides }
    
    for (i = 0; i < totalSlides; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display = "flex";
}
