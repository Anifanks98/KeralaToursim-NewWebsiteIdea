let crsr = document.querySelector(".cursor");
let crsrBlur = document.querySelector(".cursor-blur");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 10 + "px";
  crsr.style.top = dets.y + "px";
  crsrBlur.style.left = dets.x - 130 + "px";
  crsrBlur.style.top = dets.y - 130 + "px";
});

let h4all = document.querySelectorAll(".nav h3");
console.log(h4all);
h4all.forEach(function (elem) {
  console.log(elem);
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #5d8c7cdc ";
    crsr.style.backgroundColor = "#5d8c7cdc";
  });
});

gsap.to(".nav", {
  backgroundColor: "#207837",
  duration: 0.6,
  height: "85px",
  scrollTrigger: {
    trigger: ".nav",
    scroller: "body",
    // markers: true,
    start: "top -12%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to(".main", {
  backgroundColor: "#29332a",
  //markers: true,
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    // markers: true,
    start: "top -53%",
    end: " top -100%",
    scrub: 2,
  },
});
