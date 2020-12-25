var slideIndex = 1;
show_slide(slideIndex);

function pushslide(n) {
  show_slide(slideIndex += n);
}

function currentSlide(n) {
  show_slide(slideIndex = n);
}

function show_slide(n) {
  var i;
  var slides = document.getElementsByClassName("allslides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}