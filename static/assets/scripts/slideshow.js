// Adapted from w3schools
// https://www.w3schools.com/howto/howto_js_slideshow.asp

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByTagName("img");
  
  // Reset to first slide when reaching the end.
  if (n > slides.length) {slideIndex = 1}
  
  // Show current slide.
  if (n < 1) {slideIndex = slides.length}
  
  // Slide counter code.
  let counter = document.getElementById("slide-counter");
  counter.innerText = `${slideIndex}/${slides.length}`;

  // Hide all slides apart from current one.
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
    
  slides[slideIndex-1].style.display = "block";
}