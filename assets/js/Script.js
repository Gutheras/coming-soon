//----------------------Particles.Js Code----------------------//
particlesJS("particles-js", {
  particles: {
    number: {
      value: 364,
      density: { enable: true, value_area: 3864.5971354659623 },
    },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 1,
      random: false,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
    },
    size: {
      value: 2,
      random: false,
      anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: true, rotateX: 1361.503099421761, rotateY: 600 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
      repulse: { distance: 400, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: false,
});
var stats = new Stats();
stats.setMode(0);
stats.domElement.style.display = "none";
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
var count_particles = document.querySelector(".js-count-particles");
var update = function () {
  stats.begin();
  stats.end();
  if (
    count_particles &&
    window.pJSDom[0].pJS.particles &&
    window.pJSDom[0].pJS.particles.array
  ) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
//----------------------Time Counter----------------------//
var countDownDate = new Date("Jan 5, 2026 15:37:25").getTime();
var last = "00:00:00:00";
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var nowon =
    ("0" + days).slice(-2) +
    ":" +
    ("0" + hours).slice(-2) +
    ":" +
    ("0" + minutes).slice(-2) +
    ":" +
    ("0" + seconds).slice(-2);
  console.log(last + " " + nowon);
  animatetime(last, nowon);
  last = nowon;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
function animatetime(last, nowon) {
  for (var i = 0; i < nowon.length; i++) {
    if (last[i] != nowon[i]) {
      animate(i, nowon[i]);
    }
  }
}
function animate(index, number) {
  var element = document.getElementsByClassName("number")[index];
  var second = element.lastElementChild.cloneNode(true);
  second.innerHTML = number;
  element.appendChild(second);
  element.classList.add("move");
  setTimeout(function () {
    element.classList.remove("move");
  }, 500);
  setTimeout(function () {
    element.removeChild(element.firstElementChild);
  }, 500);
}
