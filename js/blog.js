// show more text on blog
const moreArticle = document.querySelector(".more-article");
const blogBtn = document.querySelector(".blog-btn");
blogBtn.addEventListener("click", () => {
  moreArticle.classList.toggle("expand-article");
  if (blogBtn.innerHTML === "show more") {
    blogBtn.innerHTML = "show less";
  } else {
    blogBtn.innerHTML = "show more";
  }
});
