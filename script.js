const menu = document.querySelector(".menu-list");
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
// const part2 = document.querySelector(".part2");

menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  body.classList.add("disabledScroll");
};
cancelBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  body.classList.remove("disabledScroll");
};
body.addEventListener("click", (event) => {
  // Check if the clicked element is not part of the navigation bar
  if (!navbar.contains(event.target)) {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    body.classList.remove("disabledScroll");
  }
});

// Scroll to the top of the page on refresh
window.onload = function () {
  window.scrollTo(0, 0);
};

// GAMES LIST
//the carousel
let slider = tns({
  container: ".carousel",
  slideBy: 1,
  speed: 200,
  nav: false,
  autoplay: true,
  controls: false,
  autoplayButtonOutput: false,
  autoplayTimeout: 3000, // Set a very small value to minimize the pause
  responsive: {
    1600: {
      items: 4,
      gutter: 20,
    },
    1024: {
      items: 3,
      gutter: 20,
    },
    768: {
      items: 2,
      gutter: 20,
    },
  },
});

//previous and next buttons
const prev = document.getElementById("prev");
const next = document.getElementById("next");
prev.addEventListener("click", () => {
  slider.goTo("prev");
});
next.addEventListener("click", () => {
  slider.goTo("next");
});

// button to open games page
const games = document.getElementById("games");
games.addEventListener("click", () => {
  // Change the URL to index.html within the same tab
  window.location.href = "games.html";
});
// GAMES LIST

// DEVICES
let slider2 = tns({
  container: ".carousel2",
  slideBy: 1,
  speed: 200,
  nav: false,
  autoplay: true,
  controls: false,
  autoplayButtonOutput: false,
  autoplayTimeout: 3000, // Set a very small value to minimize the pause
  responsive: {
    1600: {
      items: 4,
      gutter: 20,
    },
    1024: {
      items: 3,
      gutter: 20,
    },
    768: {
      items: 2,
      gutter: 20,
    },
  },
});
const prev2 = document.getElementById("prev2");
const next2 = document.getElementById("next2");

prev2.addEventListener("click", () => {
  slider2.goTo("prev");
});

next2.addEventListener("click", () => {
  slider2.goTo("next");
});

// button to open devices page
const offers = document.getElementById("offers");
offers.addEventListener("click", () => {
  // Change the URL to index.html within the same tab
  window.location.href = "offers.html";
});
const videoElement = document.getElementById("videoElement");

// Function to change the video source
function changeVideoSource(newSrc) {
  // Pause the video if it's playing
  videoElement.pause();

  // Update the source
  videoElement.querySelector("source").src = newSrc;

  // Load the new source
  videoElement.load();

  // Play the video again
  videoElement.play();
}

// Add a resize event listener to check for the media query
window.addEventListener("resize", function () {
  if (window.innerWidth <= 560) {
    changeVideoSource("images/Chabla4.mp4");
  } else {
    changeVideoSource("images/Chabla3.mp4");
  }
});
