let animatedNodes = document.querySelectorAll('.animated');

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('animated-done');
        observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.1});

animatedNodes.forEach( node => {
    observer.observe(node)
});
