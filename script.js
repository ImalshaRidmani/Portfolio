const root = document.documentElement;
const themeButton = document.querySelector("#theme");
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");

function updateThemeLabel() {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    themeButton.setAttribute("aria-label", `Switch to ${nextTheme} theme`);
}

try {
    if (localStorage.getItem("portfolio-theme") === "dark") {
        root.dataset.theme = "dark";
    }
} catch {
    // The theme toggle remains usable when browser storage is unavailable.
}

updateThemeLabel();

themeButton.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";

    try {
        localStorage.setItem("portfolio-theme", root.dataset.theme);
    } catch {
        // Keep the selected theme for this page even when it cannot be persisted.
    }

    updateThemeLabel();
});

function closeMenu() {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
}

menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation",
    );
});

navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
        closeMenu();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navigation.classList.contains("open")) {
        closeMenu();
        menuButton.focus();
    }
});

const filterButtons = document.querySelectorAll("[data-filter]");
const projects = document.querySelectorAll("[data-category]");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        filterButtons.forEach((filterButton) => {
            const isSelected = filterButton === button;
            filterButton.classList.toggle("selected", isSelected);
            filterButton.setAttribute("aria-pressed", String(isSelected));
        });

        projects.forEach((project) => {
            const matchesFilter =
                button.dataset.filter === "all" ||
                project.dataset.category === button.dataset.filter;
            project.hidden = !matchesFilter;
        });
    });
});

const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formStatus = contactForm.querySelector(".form-status");
    const submitButton = contactForm.querySelector(".contact-submit");
    const endpoint = contactForm.action;

    formStatus.replaceChildren();
    formStatus.classList.remove("is-error");

    if (endpoint.includes("YOUR_FORM_ID")) {
        formStatus.classList.add("is-error");
        formStatus.append(
            document.createTextNode(
                "The contact form isn’t connected yet. Email me at ",
            ),
        );
        const emailLink = document.createElement("a");
        emailLink.href = "mailto:imalsharidmani07@gmail.com";
        emailLink.textContent = "imalsharidmani07@gmail.com";
        formStatus.append(emailLink, document.createTextNode("."));
        return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "Sending…";
    formStatus.textContent = "Sending your message…";

    try {
        const response = await fetch(endpoint, {
            method: "POST",
            body: new FormData(contactForm),
            headers: { Accept: "application/json" },
        });

        if (!response.ok) {
            throw new Error(`Contact form request failed (${response.status}).`);
        }

        contactForm.reset();
        formStatus.textContent = "Thanks for your message. I’ll be in touch soon.";
    } catch (error) {
        formStatus.classList.add("is-error");
        formStatus.textContent =
            "Your message couldn’t be sent. Please email me at imalsharidmani07@gmail.com.";
        console.error("Contact form submission failed:", error);
    } finally {
        submitButton.disabled = false;
        submitButton.innerHTML = 'Send message <span aria-hidden="true">↗</span>';
    }
});

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
).matches;

if (!prefersReducedMotion && "IntersectionObserver" in window) {
    const revealTargets = document.querySelectorAll(
        ".hero > div, .hero-art, .hero-foot, .project, .role, .about-grid > div, .contact .wrap",
    );
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 },
    );

    revealTargets.forEach((target, index) => {
        const group = target.parentElement;
        const siblings = [...group.children].filter((child) =>
            child.matches(".project, .role"),
        );
        const stagger = siblings.includes(target)
            ? siblings.indexOf(target)
            : index % 2;
        target.style.setProperty("--reveal-delay", `${stagger * 100}ms`);
        target.classList.add("scroll-reveal");
        revealObserver.observe(target);
    });

    const scrollProgress = document.createElement("div");
    scrollProgress.className = "scroll-progress";
    scrollProgress.setAttribute("aria-hidden", "true");
    document.body.append(scrollProgress);

    let progressFrame = 0;
    const updateScrollProgress = () => {
        if (progressFrame) {
            return;
        }

        progressFrame = window.requestAnimationFrame(() => {
            const scrollableHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const progress =
                scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
            scrollProgress.style.transform = `scaleX(${Math.min(progress, 1)})`;
            progressFrame = 0;
        });
    };

    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);
    updateScrollProgress();

    const heroArt = document.querySelector(".hero-art");
    const portrait = document.querySelector(".portrait-frame");
    const finePointer = window.matchMedia(
        "(hover: hover) and (pointer: fine)",
    ).matches;

    if (heroArt && portrait && finePointer) {
        heroArt.addEventListener("pointermove", (event) => {
            const bounds = heroArt.getBoundingClientRect();
            const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
            const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;

            portrait.style.setProperty(
                "--portrait-x",
                `${(horizontal * 8).toFixed(1)}px`,
            );
            portrait.style.setProperty(
                "--portrait-y",
                `${(vertical * 8).toFixed(1)}px`,
            );
        });

        heroArt.addEventListener("pointerleave", () => {
            portrait.style.setProperty("--portrait-x", "0px");
            portrait.style.setProperty("--portrait-y", "0px");
        });
    }
}
