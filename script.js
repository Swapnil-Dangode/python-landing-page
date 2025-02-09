document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Smooth Scroll for Enroll Button
    document.querySelector(".btn").addEventListener("click", function() {
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });
});