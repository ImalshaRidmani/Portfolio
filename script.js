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

    revealTargets.forEach((target) => {
        target.classList.add("scroll-reveal");
        revealObserver.observe(target);
    });
}
