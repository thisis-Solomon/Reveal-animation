const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show");
        });
    }
};

showMenu("nav-toggle", "nav-menu");

// Active and remove menu

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    navLink.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");

    // close the menu when link selected

    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
}

navLink.forEach((item) => item.addEventListener("click", linkAction));

// Scroll Reveal Animation

const scroll = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true
})

// Scroll Home
scroll.reveal(".home__title", {})
scroll.reveal(".button", {delay: 600})
scroll.reveal(".home__img",{delay: 100})
scroll.reveal(".home__social-icon",{ interval: 1000})

// Scroll About 
scroll.reveal(".about__img",{})
scroll.reveal(".about__subtitle",{delay: 600})
scroll.reveal(".about__text", {delay: 200})
scroll.reveal(".about__img", {delay: 900})

// Scroll Skills
scroll.reveal(".skills__subtitle",{})
scroll.reveal(".skills__text", {delay: 200})
scroll.reveal(".skills__data", {interval: 600})
scroll.reveal(".skills__img", {delay: 3000})

// Scroll Work
scroll.reveal(".work__img",{interval: 400})

// scroll Contacts
scroll.reveal(".contact__input",{interval: 200})