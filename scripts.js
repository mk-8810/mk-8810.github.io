document.addEventListener("DOMContentLoaded", () => {
  const exploreButton = document.getElementById("explore-button");

  if (exploreButton) {
    exploreButton.addEventListener("click", () => {
      window.scrollTo({
        top: document.getElementById("works").offsetTop - 50,
        behavior: "smooth"
      });
    });
  }
});
