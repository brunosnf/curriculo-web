window.addEventListener('load', () => {
  // Animação do título e subtítulo
  gsap.from("header h1", {
    duration: 1.5,
    y: -50,
    opacity: 0,
    ease: "bounce.out"
  });
  gsap.from("header p", {
    duration: 1.3,
    y: -30,
    opacity: 0,
    delay: 0.5,
    ease: "power2.out"
  });
  
  // Animação dos links sociais
  gsap.from(".links a", {
    duration: 1,
    opacity: 0,
    stagger: 0.3,
    delay: 1.5,
    y: 20,
    ease: "power2.out"
  });
  
  // Animação das seções
  gsap.from("main section", {
    scrollTrigger: {
      trigger: "main section",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    duration: 1,
    opacity: 0,
    y: 40,
    stagger: 0.25,
    ease: "power3.out"
  });
  
  // Animação da grade de ícones
  gsap.from(".icon-grid a", {
    duration: 1,
    opacity: 0,
    scale: 0.7,
    stagger: 0.15,
    delay: 2,
    ease: "elastic.out(1, 0.5)"
  });
});
