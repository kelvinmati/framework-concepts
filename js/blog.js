// show more text on 1st blog
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

// show more text on 2nd blog
const moreArticle2 = document.querySelector(".more-article2");
const blogBtn2 = document.querySelector(".blog-btn2");
blogBtn2.addEventListener("click", () => {
  moreArticle2.classList.toggle("expand-article2");
  if (blogBtn2.innerHTML === "show more") {
    blogBtn2.innerHTML = "show less";
  } else {
    blogBtn2.innerHTML = "show more";
  }
});
