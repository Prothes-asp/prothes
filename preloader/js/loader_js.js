// loader Js Start Here
gsap.fromTo(
  ".canvasBg",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 1.5,
    delay: 3.5,
  }
);

gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 1.5,
    delay: 3.5,
  }
);

gsap.fromTo(
  ".logo-name",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 0.5,
  }
);


gsap.fromTo(
  ".loaderDiv",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 1.7,
    delay: 3.5,
  }
);


gsap.fromTo(
  ".loaderDiv",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 3.5,
  }
);
// Loader Js end Here


// CanvasBg Start Here
window.onload = function () {
  Particles.init({
    selector: ".canvasBg"
  });
};
const particles = Particles.init({
  selector: ".canvasBg",
  color: ["#03dac6", "#ff0266", "#000000"],
  connectParticles: true,
  responsive: [
    {
      breakpoint: 768,
      options: {
        color: ["#faebd7", "#03dac6", "#ff0266"],
        maxParticles: 43,
        connectParticles: false
      }
    }
  ]
});

class NavigationPage {
  constructor() {
    this.currentId = null;
    this.currentTab = null;
    this.tabContainerHeight = 70;
    this.lastScroll = 0;
    let self = this;
  }
}
