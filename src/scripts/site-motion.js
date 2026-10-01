const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealElements = [...document.querySelectorAll('[data-reveal]')];

if (!reducedMotion && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('motion-ready');

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0, rootMargin: '0px 0px -8% 0px' },
  );

  revealElements.forEach((element, index) => {
    element.style.setProperty('--reveal-delay', `${(index % 4) * 70}ms`);
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}

const progressBar = document.querySelector('#scroll-progress-bar');
const parallaxElement = document.querySelector('[data-parallax]');
let ticking = false;

const updatePageMotion = () => {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;

  progressBar?.style.setProperty('transform', `scaleX(${Math.min(1, Math.max(0, progress))})`);

  if (parallaxElement && !reducedMotion) {
    const offset = Math.min(36, window.scrollY * 0.045);
    parallaxElement.style.setProperty('--parallax-y', `${offset}px`);
  }

  ticking = false;
};

window.addEventListener(
  'scroll',
  () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updatePageMotion);
  },
  { passive: true },
);

if (parallaxElement && !reducedMotion && window.matchMedia('(pointer: fine)').matches) {
  parallaxElement.addEventListener('pointermove', (event) => {
    const bounds = parallaxElement.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    parallaxElement.style.setProperty('--tilt-x', `${y * -3}deg`);
    parallaxElement.style.setProperty('--tilt-y', `${x * 3}deg`);
  });

  parallaxElement.addEventListener('pointerleave', () => {
    parallaxElement.style.setProperty('--tilt-x', '0deg');
    parallaxElement.style.setProperty('--tilt-y', '0deg');
  });
}

updatePageMotion();
