function openModalGD() {
	'use strict';
  document.getElementById('graphicDesign').style.display = "block";
}
function closeModalGD() {
	'use strict';
  document.getElementById('graphicDesign').style.display = "none";
}


var slideIndexGD = 1;
showSlidesGD(slideIndexGD);

// Next/previous controls
function plusSlidesGD(n) {
	'use strict';
  showSlidesGD(slideIndexGD += n);
}

// Thumbnail image controls
function currentSlideGD(n) {
	'use strict';
  showSlidesGA(slideIndexGD = n);
}

function showSlidesGD(n) {
	'use strict';
  var i;
  var slidesGD = document.getElementsByClassName("gdSlides");
  var dotsGD = document.getElementsByClassName("demo");
  var captionTextGD = document.getElementById("caption");
  if (n > slidesGD.length) {slideIndexGD = 1;}
  if (n < 1) {slideIndexGD = slidesGD.length;}
  for (i = 0; i < slidesGD.length; i++) {
    slidesGD[i].style.display = "none";
  }
  for (i = 0; i < dotsGD.length; i++) {
    dotsGD[i].className = dotsGD[i].className.replace(" active", "");
  }
  slidesGD[slideIndexGD-1].style.display = "block";
  dotsGD[slideIndexGD-1].className += " active";
  captionTextGD.innerHTML = dotsGD[slideIndexGD-1].alt;
}
	