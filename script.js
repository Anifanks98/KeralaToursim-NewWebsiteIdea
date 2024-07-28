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
  backgroundColor: "#066014",
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
gsap.from(".headingtop", {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".headingtop",
    scroller: "body",
    start: "top 80%",
    end: "top 74%",
    scrub: 2,
  },
});

gsap.from(".top-destination .headingtop,.top-destination", {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".top-destination",
    scroller: "body",
    start: "top 70%",
    end: "top 64%",
    scrub: 2,
  },
});

gsap.from(".things-todo-heading h3", {
  y: 50,
  opacity: 0,
  duration: 0.6,
  scrollTrigger: {
    trigger: ".things-todo-heading",
    scroller: "body",
    start: "top 90%",
    end: "top 80%",
    scrub: 1,
  },
});

gsap.from(".cards-container .card", {
  scale: 0.8,
  opacity: 0,
  duration: 1,

  scrollTrigger: {
    trigger: ".cards-container",
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 1,
  },
});

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 75%",
    end: "top 60%",
    scrub: 1,
  },
});

gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon2",
    scroller: "body",
    start: "top 95%",
    end: "top 90%",
    scrub: 1,
  },
});
