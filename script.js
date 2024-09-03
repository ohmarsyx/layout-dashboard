const handleHamburger = () => {
  const hamburger = document.querySelector(".hamburger-icon");
  const sidebar = document.querySelector(".sidebar");
  const main = document.querySelector(".main-container");

  hamburger.classList.toggle("active");

  if (window.innerWidth <= 550) {
    main.style.display = "none";
    sidebar.style.width = "100vw";
    sidebar.style.backgroundColor = "white";
  }

  if (sidebar.style.display === "none" || sidebar.style.display === "") {
    sidebar.style.display = "flex";
  } else {
    sidebar.style.display = "none";
  }
};

const handleXIcon = () => {
  const xIcon = document.querySelector(".x-icon");
  const sidebar = document.querySelector(".sidebar");
  const main = document.querySelector(".main-container");

  xIcon.classList.toggle("active");

  if (sidebar.style.display === "flex" || sidebar.style.display === "") {
    sidebar.style.display = "none";
    main.style.display = "flex";
  } else {
    sidebar.style.display = "flex";
    main.style.display = "none";
  }
};

const checkResponsive = () => {
  const sidebar = document.querySelector(".sidebar");
  const main = document.querySelector(".main-container");

  if (window.matchMedia("(max-width: 550px)").matches) {
    sidebar.style.width = "100vw";
    sidebar.style.backgroundColor = "white";
  } else {
    sidebar.style.width = "340px"; 
    sidebar.style.backgroundColor = ""; 
    main.style.display = "flex"; 
  }
};

document
  .querySelector(".hamburger-icon")
  .addEventListener("click", handleHamburger);
document.querySelector(".x-icon").addEventListener("click", handleXIcon);

window.addEventListener("DOMContentLoaded", checkResponsive);
window.addEventListener("resize", checkResponsive);
