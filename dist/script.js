const sideHeader = document.querySelector(".sideHeader");
const red = document.querySelector(".sideHeader #service");

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY >= 200) {
        sideHeader.classList.add("open");
    } else {
        sideHeader.classList.remove("open");
    }
    if (window.scrollY >= 300) {
        red.classList.add("open");
    } else {
        red.classList.remove("open");
    }
});