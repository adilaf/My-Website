
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  var sliderWrapper = document.getElementById("sliderWrapper");

  if (n > x.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = x.length; }
  
  // Calculate new margin
  var newMarginLeft = -(slideIndex - 1) * 100 + '%';

  // Apply new margin to slider wrapper
  sliderWrapper.style.marginLeft = newMarginLeft;
}

