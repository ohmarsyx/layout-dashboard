const handleHamburger = () => {
    const hamburger = document.querySelector(".hamburger-icon");
    const sidebar = document.querySelector(".sidebar");
    hamburger.classList.toggle("active");
    
    if (sidebar.style.display === "none" || sidebar.style.display === "") {
      sidebar.style.display = "flex";
    } else {
      sidebar.style.display = "none";
    }
  };
  
  document
    .querySelector(".hamburger-icon")
    .addEventListener("click", handleHamburger);
  