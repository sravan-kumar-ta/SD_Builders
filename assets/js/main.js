/*
Template Name: HostGrids - Hosting & Domain Services HTML Template.
Author: GrayGrids
*/

(function () {
    //===== Prealoder

    window.onload = function () {
        window.setTimeout(fadeout, 500);
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }

    
    // WOW active
    new WOW().init();


    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        var logo = document.querySelector('.navbar-brand img')
        if (window.pageYOffset > sticky) {
          header_navbar.classList.add("sticky");
          logo.src = 'assets/images/logo/logo.svg';
        } else {
          header_navbar.classList.remove("sticky");
          logo.src = 'assets/images/logo/white-logo.svg';
        }

        // show or hide the back-top-top button
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

})();