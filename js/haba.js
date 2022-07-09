// show more text on haba pay
const showMore = document.querySelector(".more-btn");
const more = document.querySelector(".more-info");
showMore.addEventListener("click", () => {
  more.classList.toggle("expand");
  if (showMore.innerHTML === "show more") {
    showMore.innerHTML = "show less";
  } else {
    showMore.innerHTML = "show more";
  }
});
