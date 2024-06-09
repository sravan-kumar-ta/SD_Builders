(function () {
    // WOW active
    new WOW().init();
    
    //===== show or hide the back-to-top button
    window.onscroll = function () {
        var backToTo = document.querySelector(".scroll-top");
        var whatsapp = document.querySelector("#whatsapp");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
            whatsapp.style.bottom = "100px";
        } else {
            backToTo.style.display = "none";
            whatsapp.style.bottom = "30px";
        }
    };


    //===== mobile-menu-btn
    let navbarToggler = document.querySelector(".mobile-menu-btn");
    let navbarMenu = document.querySelector("#navbarSupportedContent");
    let navLinks = document.querySelectorAll("#nav .nav-item a");
    
    navbarToggler.addEventListener('click', function () {
        navbarToggler.classList.toggle("active");
    });
    
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
})();