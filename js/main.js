
// ==========================================
// PERSONAL PORTFOLIO
// MAIN JAVASCRIPT
// ==========================================


// ==========================================
// 1. SCROLL REVEAL ANIMATION
// ==========================================

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach((element, index) => {

        element.style.transitionDelay = `${index * 100}ms`;

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach((element) => {

        element.classList.add("is-visible");

    });

}


// ==========================================
// 2. ABOUT SECTION TEXT HOVER EFFECT
// ==========================================

const aboutParagraphs = document.querySelectorAll(
    ".about-description p"
);

aboutParagraphs.forEach((paragraph) => {

    paragraph.addEventListener("mouseenter", () => {

        paragraph.classList.add("paragraph-active");

    });

    paragraph.addEventListener("mouseleave", () => {

        paragraph.classList.remove("paragraph-active");

    });

});


// ==========================================
// 3. ABOUT TITLE INTERACTION
// ==========================================

const aboutTitle = document.querySelector(".about-title");

if (aboutTitle) {

    aboutTitle.addEventListener("mouseenter", () => {

        aboutTitle.classList.add("title-active");

    });

    aboutTitle.addEventListener("mouseleave", () => {

        aboutTitle.classList.remove("title-active");

    });

}


// ==========================================
// 4. SMOOTH SECTION NAVIGATION
// ==========================================

// The links use normal HTML anchor destinations.
// This adds smooth scrolling and accounts for
// the sticky header.

const sectionLinks = document.querySelectorAll(
    '.explore-card[href^="#"]'
);

sectionLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        const targetSection = document.querySelector(targetId);

        // Do not intercept links to sections
        // that have not been created yet.

        if (!targetSection) {
            return;
        }

        event.preventDefault();

        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        // Update the browser URL.

        history.pushState(null, "", targetId);

    });

});


// ==========================================
// 5. CURRENT YEAR HELPER
// ==========================================

const currentYear = new Date().getFullYear();

console.log(`Portfolio loaded - ${currentYear}`);
