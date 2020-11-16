let time = 5000;
let currentImgIndex = 0;
let images = document.querySelectorAll(".slider img");
let max = images.length;

function nextImage() {
  images[currentImgIndex]
    .classList.remove("selected")

  currentImgIndex++

  if (currentImgIndex >= max) {
    currentImgIndex = 0
  }

  images[currentImgIndex]
    .classList.add("selected")
}



function start() {
  setInterval(() => {
    nextImage()
  }, time)
}

window.addEventListener("load", start)