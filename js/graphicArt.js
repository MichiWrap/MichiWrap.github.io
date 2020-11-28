/*exported closeModalDA()*/


function openModalGA() {
	'use strict';
  document.getElementById('graphicArt').style.display = "block";
}
function closeModalGA() {
	'use strict';
  document.getElementById('graphicArt').style.display = "none";
}


var slideIndexGA = 1;
showSlidesGA(slideIndexGA);

// Next/previous controls
function plusSlidesGA(n) {
	'use strict';
  showSlidesGA(slideIndexGA += n);
}

// Thumbnail image controls
function currentSlideGA(n) {
	'use strict';
  showSlidesGA(slideIndexGA = n);
}

function showSlidesGA(n) {
	'use strict';
  var i;
  var slidesGA = document.getElementsByClassName("gaSlides");
  var dotsGA = document.getElementsByClassName("demo");
  var captionTextGA = document.getElementById("caption");
  if (n > slidesGA.length) {slideIndexGA = 1;}
  if (n < 1) {slideIndexGA = slidesGA.length;}
  for (i = 0; i < slidesGA.length; i++) {
    slidesGA[i].style.display = "none";
  }
  for (i = 0; i < dotsGA.length; i++) {
    dotsGA[i].className = dotsGA[i].className.replace(" active", "");
  }
  slidesGA[slideIndexGA-1].style.display = "block";
  dotsGA[slideIndexGA-1].className += " active";
  captionTextGA.innerHTML = dotsGA[slideIndexGA-1].alt;
}
	