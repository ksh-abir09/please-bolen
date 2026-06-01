gsap.registerPlugin(ScrollTrigger);

// HERO animation (first load)
gsap.from(".title", {
  y: 80,
  opacity: 0,
  duration: 1.5,
  ease: "power4.out"
});

gsap.from(".subtitle", {
  y: 40,
  opacity: 0,
  delay: 0.3,
  duration: 1.2
});

// Section scroll cinematic effect
gsap.utils.toArray(".panel").forEach((panel) => {
  gsap.fromTo(panel,
    {
      opacity: 0,
      scale: 0.95
    },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: panel,
        start: "top 80%",
        end: "top 30%",
        scrub: true
      }
    }
  );
});
