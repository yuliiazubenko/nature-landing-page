document.addEventListener("DOMContentLoaded", function () {
  const navBtn = document.querySelector(".menu-btn");
  const navList = document.querySelector(".nav-list");

  navBtn.addEventListener("click", function () {
    navList.classList.toggle("active");
  });

  AOS.init({
    duration: 1000,
    offset: 100,
    once: true,
  });
});
