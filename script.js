javascript
function toggleMenu() {
    const nav = document.querySelector(".nav-links");
    nav.classList.toggle("active");
}


// Close mobile menu when clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".nav-links").classList.remove("active");
    });
});


// Simple reveal animation

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .stat"
);

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    {
        threshold: 0.15
    }
);


cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.6s ease";

    observer.observe(card);
});
javascript
function showProjects() {
    const home = document.getElementById("home");
    const projects = document.getElementById("projects");

    // Move home screen out
    home.classList.add("slide-out");

    setTimeout(() => {
        // Hide home
        home.style.display = "none";

        // Show projects
        projects.classList.add("project-screen");
        projects.style.display = "block";

        // Start project animation
        setTimeout(() => {
            projects.classList.add("show-projects");
        }, 50);

    }, 700);
}
