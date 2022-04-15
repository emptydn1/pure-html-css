let time = setInterval(function () {
  autoSlide();
}, 4000);

let remove = (arr, text) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].classList.remove(text);
  }
};

let slides = document.querySelectorAll(".hero__wrapper");
function autoSlide() {
  var position = 0;
  var thisActive = document.querySelector(".hero .hero__wrapper.active");
  for (
    position = 0;
    (thisActive = thisActive.previousElementSibling);
    position++
  ) {}

  if (position < slides.length - 1) {
    remove(slides, "active");
    slides[position].nextElementSibling.classList.add("active");
  } else {
    remove(slides, "active");
    slides[0].classList.add("active");
  }
}

//slide// init Flickity
let query = (queryClass, temp = true) => {
  return temp
    ? document.querySelector(queryClass)
    : document.querySelectorAll(queryClass);
};

// let elem = query(".products .main-carousel");
// let flkty = new Flickity(elem, {
//   prevNextButtons: false,
//   pageDots: false,
// });

// let cellButtonGroup = query(".button-group--cells");
// let cellButtons = query(".button-group--cells .button", false);

// let btn_pre = query(".products .button--previous");
// let btn_nex = query(".products .button--next");
// cellButtons = fizzyUIUtils.makeArray(cellButtons);

// btn_pre.addEventListener("click", function (e) {
//   let position;
//   let thisActive = query(".button-group--cells .button.is-selected");
//   for (
//     position = 0;
//     (thisActive = thisActive.previousElementSibling);
//     position++
//   ) {}
//   remove(cellButtons, "is-selected");

//   if (position > 0) {
//     cellButtons[position - 1].classList.add("is-selected");
//   } else {
//     cellButtons[cellButtons.length - 1].classList.add("is-selected");
//   }
//   flkty.next(true);
// });

// btn_nex.addEventListener("click", function (e) {
//   let position;
//   let thisActive = query(".button-group--cells .button.is-selected");
//   for (
//     position = 0;
//     (thisActive = thisActive.previousElementSibling);
//     position++
//   ) {}
//   remove(cellButtons, "is-selected");

//   if (position < cellButtons.length - 1) {
//     cellButtons[position + 1].classList.add("is-selected");
//   } else {
//     cellButtons[0].classList.add("is-selected");
//   }
//   flkty.previous(true);
// });

// cellButtonGroup.addEventListener("click", function (event) {
//   if (!matchesSelector(event.target, ".button")) {
//     return;
//   }

//   remove(cellButtons, "is-selected");
//   let index = cellButtons.indexOf(event.target);
//   cellButtons[index].classList.add("is-selected");
//   flkty.select(index);
// });



var $carousel = $(".products .main-carousel").flickity({
  prevNextButtons: false,
  pageDots: false,
});
var flkty = $carousel.data("flickity");
var $cellButtonGroup = $(".button-group--cells");
var $cellButtons = $cellButtonGroup.find(".button");

$carousel.on("select.flickity", function () {
  $cellButtons.filter(".is-selected").removeClass("is-selected");
  $cellButtons.eq(flkty.selectedIndex).addClass("is-selected");
});

$cellButtonGroup.on("click", ".button", function () {
  var index = $(this).index();
  $carousel.flickity("select", index);
});
$(".button--previous").on("click", function () {
  $carousel.flickity("previous", true);
});
$(".button--next").on("click", function () {
  $carousel.flickity("next", true);
});
