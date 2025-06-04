document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle
    const mobileMenuButton = document.querySelector(".mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener("click", () => {
            mobileMenu.classList.toggle("show");
        });

        document.querySelectorAll("#mobile-menu a").forEach(link => {
            link.addEventListener("click", () => {
                mobileMenu.classList.remove("show");
            });
        });
    }

    // Back to Top Button
    const backToTopButton = document.getElementById("back-to-top");

    if (backToTopButton) {
        window.addEventListener("scroll", () => {
            backToTopButton.classList.toggle("visible", window.pageYOffset > 300);
        });

        backToTopButton.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute("href"));

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });

    // Form submission handling
    const contactForm = document.querySelector("#contact form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const subject = document.getElementById("subject").value;
            const message = document.getElementById("message").value;

            alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
            contactForm.reset();
        });
    }

    // Animate elements when they come into view using Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Stops observing once animated
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll(".animate-fade-in").forEach(element => {
        observer.observe(element);
    });
});