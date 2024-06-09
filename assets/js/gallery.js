(function () {
    /*=============== WOW ACTIVE ===============*/
    new WOW().init();
    
    /*=============== SHOW or HIDE BACK-TO-TOP BUTTON ===============*/
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

    /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 58;
            const sectionId = current.getAttribute('id');
            const sectionClass = document.querySelector('.navbar-nav a[href*=' + sectionId + ']');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                sectionClass.classList.add('active');
            } else {
                sectionClass.classList.remove('active');
            }
        });
    });

    /*=============== MOBILE MENU BAR ===============*/
    let navbarToggler = document.querySelector(".mobile-menu-btn");
    let navbarMenu = document.querySelector("#navbarSupportedContent");
    let navLinks = document.querySelectorAll(".nav-link-custom");
    
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

    /*=============== Close the navbar when clicking outside of it ===============*/
    document.addEventListener('click', function (event) {
        let isClickInsideNavbar = navbarMenu.contains(event.target) || navbarToggler.contains(event.target);

        if (!isClickInsideNavbar && navbarToggler.classList.contains("active")) {
            navbarToggler.classList.remove("active");
            navbarMenu.classList.remove("show");
        }
    });

    /*=Add overflow-y: scroll; to navbarSupportedContent if screen width <= 991px when clicking on the contact <li>=*/
    const contactLi = document.querySelector('li.contact');

    if (contactLi) {
        contactLi.addEventListener('click', function () {
            if (window.innerWidth <= 991) {
                navbarMenu.style.overflowY = 'hidden';
            }
        });
    }
})();