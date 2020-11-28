/*exported closeModalDA()*/


function openModalUI() {
	'use strict';
  document.getElementById('UIDesign').style.display = "block";
}
function closeModalUI() {
	'use strict';
  document.getElementById('UIDesign').style.display = "none";
}


var slideIndexUI = 1;
showSlidesUI(slideIndexUI);

// Next/previous controls
function plusSlidesUI(n) {
	'use strict';
	$("div.modal").scrollTop(0);
    showSlidesUI(slideIndexUI += n);	
}

// Thumbnail image controls
function currentSlideUI(n) {
	'use strict'
  showSlidesUI  (slideIndexUI = n);
	

}

function showSlidesUI(n) {
	'use strict';
	$("div.modal").scrollTop(0);
  var i;
  var slidesUI = document.getElementsByClassName("uiSlides");
  var dotsUI = document.getElementsByClassName("demo");
  var captionTextUI = document.getElementById("caption");
  if (n > slidesUI.length) {slideIndexUI = 1;}
  if (n < 1) {slideIndexUI = slidesUI.length;}
  for (i = 0; i < slidesUI.length; i++) {
    slidesUI[i].style.display = "none";
  }
  for (i = 0; i < dotsUI.length; i++) {
    dotsUI[i].className = dotsUI[i].className.replace(" active", "");
  }
  slidesUI[slideIndexUI-1].style.display = "block";
  dotsUI[slideIndexUI-1].className += " active";
  captionTextUI.innerHTML = dotsUI[slideIndexUI-1].alt;
}
	