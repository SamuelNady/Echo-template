// header matrial
const dropMenu = document.querySelector(".dropdown");
const dropMenuParent = document.querySelector("li:has(.dropdown)");
const menuToggler = document.querySelector(".toggle-menu");
const menuClose = document.querySelector(".close-menu");
const actions = document.querySelector(".actions");

// scroll reavel materials
const landingImg = document.querySelector(".landing .container .img-con");
const landingContent = document.querySelectorAll(
    ".landing .container .content *"
);
const featureConetent = document.querySelectorAll(".features .container :is(.sec-heading, .item)");
const aboutContent = document.querySelectorAll(".about .container > *");
const servicesContent = document.querySelectorAll(".services .container :is(.sec-heading, .item)");
const testimonialsContent = document.querySelectorAll(".testimonials .container > *");
const teamContent = document.querySelectorAll(".team .container :is(.sec-heading, .item)");
const statusContent = document.querySelectorAll(".status .container :is(.sec-heading, .state)");
const FAQContent = document .querySelectorAll(".FAQ .container :is(.sec-heading, .expand)");
const contactContent = document.querySelectorAll(".contact-us .container :is(.sec-heading, .input-feild, button)")
// status items
const statusSection = document.querySelector(".status .container .status");
const statusItems = document.querySelectorAll(".status .container .status .state");

//FAQ section
const FAQ = document.querySelectorAll(".FAQ .container .content .expand h2");
const toExpand = document.querySelectorAll(".FAQ .container .content .expand .con");
// header buttens
dropMenu.addEventListener("click", function () {
    dropMenu.classList.toggle("dropdownv");
    if (dropMenu.classList.contains("dropdownv")) {
        dropMenuParent.ariaExpanded = "true";
    } else {
        dropMenuParent.ariaExpanded = "false";
    }
});

menuToggler.addEventListener("click", function () {
    actions.classList.add("menu-vis");
});

menuClose.addEventListener("click", function () {
    actions.classList.add("slideback");

    setTimeout(function () {
        actions.classList.remove("slideback", "menu-vis");
    }, 500);
});

// scroll reavel

// landing
ScrollReveal().reveal(
    landingImg,
    {
    origin: "top",
    distance: "100px",
});

let d = 0;
landingContent.forEach(function(e) {
    ScrollReveal().reveal(
        e,
        {
            distance: '100px',
            origin: 'left',
            delay: d,
        }
    )
    d += 50;
});

// features
featureConetent.forEach(function(e) {
    ScrollReveal().reveal(
        e,
        {
            distance: '100px',
            origin: 'bottom',
        }
    )
});

// about
aboutContent.forEach(function(e) {
    ScrollReveal().reveal(
        e,
        {
            distance: '100px',
            origin: 'bottom',
        }
    )
});

//services
servicesContent.forEach(function(e) {
    ScrollReveal().reveal(
        e,
        {
            distance: '100px',
            origin: 'bottom',
        }
    )
});

// team
teamContent.forEach(function(e) {
    ScrollReveal().reveal(
        e,
        {
            distance: '100px',
            origin: 'bottom',
        }
    )
});

// status
statusContent.forEach(function(e) {
    ScrollReveal().reveal(
        e,
        {
            distance: '100px',
            origin: 'bottom',
        }
    )
});

if (statusSection) {
    in_view = false
    window.onscroll = function () {
        view = statusSection.getBoundingClientRect().top > window.innerHeight;
        if (!view) {
            in_view = false
        }

        let status = [3923, 131, 962, 5949];
        if (view && !in_view) {
            in_view = true;
            statusItems.forEach(function (e,index) {
                let i = 0;
                let int = setInterval(function () {

                    if (status[index] > 2000) {
                        i += 20;
                    }
                    else {
                        i += 3;
                    }

                    if (i > status[index]) {
                        clearInterval(int);
                    }
                    e.innerHTML = i;
                }, 10);
            });
        }
    }
}

// testimonials
testimonialsContent.forEach(function(e) {
    ScrollReveal().reveal(
        e,
        {
            distance: '100px',
            origin: 'bottom',
        }
    )
});

// FAQ
FAQContent.forEach(function(e) {
    ScrollReveal().reveal(
        e,
        {
            distance: '100px',
            origin: 'bottom',
        }
    )
});

FAQ.forEach(function (e) {
    e.addEventListener('click', function() {
        e.nextElementSibling.classList.toggle("expanded");
    });
});

// contact us
d = 0;
contactContent.forEach(function(e) {
    ScrollReveal().reveal(
        e,
        {
            distance: '100px',
            origin: 'bottom',
            delay: d,
        }
    )
    d += 50;
});