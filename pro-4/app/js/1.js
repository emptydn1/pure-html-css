var $carousel = $(".testimonials__list")
  .flickity({
    prevNextButtons: false,
    pageDots: false,
  })
  .flickity("select", 1, true, true);
