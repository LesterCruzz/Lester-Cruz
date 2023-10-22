const sideHeader = document.querySelector(".sideHeader");
const toggleBtn = document.querySelector(".toggleMenu");
const openMenu = document.querySelector(".openMenu");
const closeBtn = document.querySelector(".toggleMenu.open");

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("open");
    openMenu.classList.toggle("open");
});
closeBtn.addEventListener("click", () => {
    closeBtn.classList.remove("open");
    openMenu.classList.remove("open");
});

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY >= 200) {
        sideHeader.classList.add("open");
    } else {
        sideHeader.classList.remove("open");
    }
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.sideHeader a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.sideHeader a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

var menu = document.getElementById("menu");

        menu.onclick = function() {
            menu.classList.toggle("openmenu");
        };

