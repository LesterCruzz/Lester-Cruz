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