// GSAP Animations
gsap.from(".profile-photo", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
gsap.from(".typewriter", { duration: 2, opacity: 0, delay: 1, ease: "power2.out" });

// Scroll Animations
gsap.from("#about", {
    duration: 1,
    opacity: 0,
    y: 50,
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
    },
});

gsap.from(".project-card", {
    duration: 1,
    scale: 0.8,
    opacity: 0,
    stagger: 0.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".project-card",
        start: "top 80%",
    },
});