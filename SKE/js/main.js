$(function () {
  
  //sliders
  $(".main-slider__list").slick({
    fade: true,
    dots: true,
    prevArrow:
      '<button class="main-slider__arrow-prev main-slider__arrow" type="button">  <svg  class="main-slider__arrow-prev__img main-slider__arrow__img"  width="36"  height="36" viewBox="0 0 36 36"  fill="none"  xmlns="http://www.w3.org/2000/svg"> <path d="M28.5 18L7.5 18" stroke="#275BA8" stroke-opacity="0.3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path  d="M18 28.5L7.5 18L18 7.5" stroke="#275BA8" stroke-opacity="0.3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </svg></button>',
    nextArrow:
      '<button class="main-slider__arrow-next main-slider__arrow" type="button"> <svg class="main-slider__arrow-next__img main-slider__arrow__img" width="36"  height="36"  viewBox="0 0 36 36"  fill="none"  xmlns="http://www.w3.org/2000/svg" > <path  d="M7.5 18L28.5 18" stroke="#275BA8" stroke-opacity="0.3"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" /> <path  d="M18 7.5L28.5 18L18 28.5" stroke="#275BA8"  stroke-opacity="0.3"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" /> </svg> </button>',
  });

  $(".add-slider").slick({
    slidesToShow: 3,
    infinite: true,
    prevArrow:
      '<button class="add-slider__arrow add-slider__arrow-prev"> <svg class="add-slider__arrow-img"  width="8" height="12" viewBox="0 0 8 12"  fill="none" xmlns="http://www.w3.org/2000/svg" > <path  d="M7.90499 10.59L3.32499 6L7.90499 1.41L6.495 -3.7193e-06L0.494994 6L6.49499 12L7.90499 10.59Z" fill="#275BA8" fill-opacity="0.3" /> </svg></button>',
    nextArrow: `<button class="add-slider__arrow add-slider__arrow-next">
          <svg
            class="add-slider__arrow-img"
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.095006 1.41L4.67501 6L0.0950052 10.59L1.505 12L7.50501 6L1.50501 -5.24537e-07L0.095006 1.41Z"
              fill="#2054A2"
              fill-opacity="0.3"
            />
          </svg>
        </button>`,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          autoplay: true,
        },
      },
    ],
  });

  $(".news-card__list").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          autoplay: true,
        },
      },
    ],
  });
  //serch

  $(".search-close-btn").on("click", function (evt) {
    evt.preventDefault();
    $(".header__nav-form").removeClass("header__nav-form--active");
  });
  $(".search-open-btn").on("click", function (evt) {
    evt.preventDefault();
    $(".header__nav-form").addClass("header__nav-form--active");
  });

  //menu

  $(".close-menu-btn").on("click", function () {
    $(".phone-aside").removeClass("phone-aside--active");
  });
  $(".open-menu-btn").on("click", function () {
    $(".phone-aside").addClass("phone-aside--active");
  });

  //input file
  let inputs = document.querySelectorAll(".input__file");
  Array.prototype.forEach.call(inputs, function (input) {

    let label = input.nextElementSibling,
      labelVal = label.querySelector(".input__file-button-text").innerText;

    input.addEventListener("change", function (e) {
      let countFiles = "";
      if (this.files && this.files.length >= 1) countFiles = this.files.length;

      if (countFiles)
        label.querySelector(".input__file-button-text").innerText =
          "Выбрано файлов: " + countFiles;
      else label.querySelector(".input__file-button-text").innerText = labelVal;
    });
  });
});

var goTopBtn = document.querySelector('.back_to_top');

window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);

function trackScroll() {
  var scrolled = window.pageYOffset;
  var coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    goTopBtn.classList.add('back_to_top-show');
  }
  if (scrolled < coords) {
    goTopBtn.classList.remove('back_to_top-show');
  }
}

function backToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -80);
    setTimeout(backToTop, 0);
  }
}

var img = new Image();

// User Variables - customize these to change the image being scrolled, its
// direction, and the speed.

img.src = 'https://thumbs.dreamstime.com/b/%D0%B1%D0%B5%D1%81%D0%BA%D0%BE%D0%BD%D0%B5%D1%87%D0%BD%D0%B0%D1%8F-%D1%81%D0%B8%D1%80%D0%BE%D1%82-%D0%B8%D0%B2%D0%B0%D1%8F-%D1%88%D0%B8%D1%80%D0%BE%D0%BA%D0%B0%D1%8F-%D0%BE%D1%80%D0%BE%D0%B3%D0%B0-%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D0%B0%D1%8F-%D0%B1%D0%B5%D0%B6%D0%B8%D1%82-%D0%BA-%D0%B3%D0%BE%D1%80%D0%B8%D0%B7%D0%BE%D0%BD%D1%82%D1%83-%D0%B0%D0%BD-91934718.jpg';
var CanvasXSize = 1200;
var CanvasYSize = 600;
var speed = 30; //lower is faster
var scale = 1.05;
var y = -4.5; //vertical offset

// Main program

var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;

img.onload = function() {
  imgW = img.width*scale;
  imgH = img.height*scale;
  if (imgW > CanvasXSize) { x = CanvasXSize-imgW; } // image larger than canvas
  if (imgW > CanvasXSize) { clearX = imgW; } // image larger than canvas
  else { clearX = CanvasXSize; }
  if (imgH > CanvasYSize) { clearY = imgH; } // image larger than canvas
  else { clearY = CanvasYSize; }
  //Get Canvas Element
  ctx = document.getElementById('canvas').getContext('2d');
  //Set Refresh Rate
  return setInterval(draw, speed);
}

function draw() {
  //Clear Canvas
  ctx.clearRect(0,0,clearX,clearY);
  //If image is <= Canvas Size
  if (imgW <= CanvasXSize) {
    //reset, start from beginning
    if (x > (CanvasXSize)) { x = 0; }
    //draw aditional image
    if (x > (CanvasXSize-imgW)) { ctx.drawImage(img,x-CanvasXSize+1,y,imgW,imgH); }
  }
  //If image is > Canvas Size
  else {
    //reset, start from beginning
    if (x > (CanvasXSize)) { x = CanvasXSize-imgW; }
    //draw aditional image
    if (x > (CanvasXSize-imgW)) { ctx.drawImage(img,x-imgW+1,y,imgW,imgH); }
  }
  //draw image
  ctx.drawImage(img,x,y,imgW,imgH);
  //amount to move
  x += dx;
}

