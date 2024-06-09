//===== mobile-menu-btn
let navbarToggler = document.querySelector(".mobile-menu-btn");
let navbarMenu = document.querySelector("#navbarSupportedContent");
let navLinks = document.querySelectorAll("#nav .nav-item a");

// Toggle the active class on the navbar toggler when clicked
navbarToggler.addEventListener('click', function () {
    navbarToggler.classList.toggle("active");
    navbarMenu.classList.toggle("show");  // Toggle the show class
});

// Close the navbar when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        // Check if the navbar is expanded
        if (navbarToggler.classList.contains("active")) {
            // Collapse the navbar
            navbarToggler.classList.remove("active");
            navbarMenu.classList.remove("show");
        }
    });
});

// Close the navbar when clicking outside of it
document.addEventListener('click', function (event) {
    let isClickInsideNavbar = navbarMenu.contains(event.target) || navbarToggler.contains(event.target);

    if (!isClickInsideNavbar) {
        if (navbarToggler.classList.contains("active")) {
            navbarToggler.classList.remove("active");
            navbarMenu.classList.remove("show");
        }
    }
});
