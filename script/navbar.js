const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
});


document.querySelectorAll(".nav-links").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});
