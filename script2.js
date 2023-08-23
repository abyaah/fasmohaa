let scrollButton = document.getElementsByClassName("gotop")[0]; // Access the first element
var footerElement = document.querySelector(".footer");
var footerHeight = footerElement.clientHeight;
var topElement = document.querySelector(".part1");
var topHeight = topElement.clientHeight - 400;
let scrollHeight = document.body.clientHeight - footerHeight - 800; // Adjust this value to the desired scroll height

window.addEventListener("scroll", function () {
  if (window.innerWidth <= 560) {
    if (window.scrollY > scrollHeight || window.scrollY < topHeight) {
      scrollButton.style.opacity = 0; // Hide the button
    } else {
      scrollButton.style.opacity = 1; // Show the button
    }
  } else {
    if (window.scrollY > scrollHeight) {
      scrollButton.style.opacity = 0; // Hide the button
    } else {
      scrollButton.style.opacity = 1; // Show the button
    }
  }
});
