const burgerIcon = document.querySelector(".links");
const burgerIconList = document.querySelector(".burger-icon-list");

burgerIcon.addEventListener("click", () => {
  burgerIconList.classList.toggle("d-none");
});
