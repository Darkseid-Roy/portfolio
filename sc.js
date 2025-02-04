document.addEventListener("DOMContentLoaded", function () {
    const btns = document.querySelectorAll(".btn");
    
    btns.forEach(btn => {
        btn.addEventListener("mouseover", function () {
            this.style.opacity = "0.8";
        });
        
        btn.addEventListener("mouseout", function () {
            this.style.opacity = "1";
        });
    });

    // Add hover effect to project cards
    const projectCards = document.querySelectorAll(".card");
    projectCards.forEach(card => {
        card.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.3s ease";
        });
        
        card.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });

    // Smooth scrolling for navbar links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Add social media logos dynamically
    const socialIcons = {
        linkedin: "fa-brands fa-linkedin",
        github: "fa-brands fa-github",
        email: "fa-solid fa-envelope"
    };

    document.querySelectorAll(".social-icons a").forEach(link => {
        const platform = link.textContent.trim().toLowerCase();
        if (socialIcons[platform]) {
            link.innerHTML = `<i class="${socialIcons[platform]}"></i>`;
        }
    });
});

