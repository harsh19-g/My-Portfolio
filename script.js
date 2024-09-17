// Toggle hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});

// Change navbar style on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Animate project cards on load
window.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('slide-in');  // Add a class to trigger CSS animation
    });
});

// Animate skill bars on load
window.addEventListener('DOMContentLoaded', () => {
    const skillBars = document.querySelectorAll('.skill-progress');

    skillBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.width = `${percentage}%`;
    });
});

// Smoothly animate skill bar widths using GSAP
document.addEventListener('DOMContentLoaded', function () {
    const progressBars = document.querySelectorAll('.skill-progress');

    progressBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        gsap.to(bar, {
            width: `${percentage}%`,
            duration: 2,
            ease: 'power3.inOut'
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    let typed = new Typed(".highlight", {
      strings: ["Harsh Gupta", "Frontend Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true
    });
  });