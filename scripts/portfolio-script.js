const images = document.getElementsByClassName("portfolio-column");
const tints = document.getElementsByClassName("black-img-tint");
const texts = document.getElementsByClassName("img-text")
var i;
for (i = 0; i < images.length; i++) {
  images[i].index = i;
  images[i].addEventListener("mouseenter", imageOverlay);
  images[i].addEventListener("mouseleave", imageOverlay);
}

function imageOverlay(evt) {
  tints[evt.currentTarget.index].classList.toggle("hovered");
  texts[evt.currentTarget.index].classList.toggle("hovered");
}