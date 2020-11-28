/*exported closeModalDA()*/


function openModalAA() {
	'use strict';
  document.getElementById('animatedArt').style.display = "block";
}
function closeModalAA() {
	'use strict';
  document.getElementById('animatedArt').style.display = "none";
}


var slideIndexAA = 1;
showSlidesAA(slideIndexAA);

// Next/previous controls
function plusSlidesAA(n) {
	'use strict';
  showSlidesAA(slideIndexAA += n);
}

// Thumbnail image controls
function currentSlideAA(n) {
	'use strict';
  showSlidesAA(slideIndexAA = n);
}

function showSlidesAA(n) {
	'use strict';
  var i;
  var slidesAA = document.getElementsByClassName("aaSlides");
  var dotsAA = document.getElementsByClassName("demo");
  var captionTextAA = document.getElementById("caption");
  if (n > slidesAA.length) {slideIndexAA = 1;}
  if (n < 1) {slideIndexAA = slidesAA.length;}
  for (i = 0; i < slidesAA.length; i++) {
    slidesAA[i].style.display = "none";
  }
  for (i = 0; i < dotsAA.length; i++) {
    dotsAA[i].className = dotsAA[i].className.replace(" active", "");
  }
  slidesAA[slideIndexAA-1].style.display = "block";
  dotsAA[slideIndexAA-1].className += " active";
  captionTextAA.innerHTML = dotsAA[slideIndexAA-1].alt;
}
	