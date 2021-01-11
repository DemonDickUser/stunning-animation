const spanText1 = document.querySelectorAll(".span1");
const spanText2 = document.querySelectorAll(".span2");
const slider = document.querySelectorAll(".slider");
const intro = document.querySelector(".intro");
const text = document.querySelector(".text");

const tl = new TimelineMax();

tl.fromTo(spanText1, 2, { y: "100" }, { y: "0%", ease: Power2.easeInOut })
  .fromTo(
    spanText2,
    3,
    { y: "-100%" },
    { y: "0%", ease: Power2.easeInOut },
    "-=2"
  )
  .fromTo(
    spanText1,
    1,
    { x: "0%" },
    { x: "-100%", ease: Power2.easeInOut },
    "+=1"
  )
  .fromTo(
    spanText2,
    1,
    { x: "0%" },
    { x: "100%", ease: Power2.easeInOut },
    "-=1.5"
  )
  .fromTo(
    spanText2,
    1,
    { y: "0%" },
    { y: "100%", ease: Power2.easeInOut },
    "-=0.5"
  )
  .fromTo(spanText1, 1, { y: "0%" }, { y: "-100%", ease: Power2.easeInOut })
  .fromTo(
    slider,
    2,
    { y: "-100%" },
    { y: "100%", ease: Power2.easeInOut },
    "-=1.5"
  )
  .fromTo(intro, 1, { y: "0%" }, { y: "-100%", ease: Power2.esaeInOut }, "-=1")
  .fromTo(text, 2, { x: "100%" }, { x: "0%", ease: Power2.easeInOut });
