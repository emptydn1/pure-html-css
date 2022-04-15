let slide_content = document.querySelectorAll(".testimonial__content");
let slide_button = document.querySelectorAll(".testimonial__button div");

const remove = (array, classes) => {
  for (let i = 0; i < array.length; i++) {
    array[i].classList.remove(`${classes}`);
  }
};

for (let i = 0; i < slide_button.length; i++) {
  slide_button[i].addEventListener("click", function (e) {
    remove(slide_button, "active");
    this.classList.add("active");

    let action = this;
    for (
      var position = 0;
      (action = action.previousElementSibling);
      position++
    ) {}

    remove(slide_content, "active");

    slide_content[position].classList.add("active");
  });
}
