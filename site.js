(() => {
  'use strict';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  document.querySelectorAll('.paper-media').forEach((media) => {
    const video = media.querySelector('video');
    if (!video) return;
    const paper = media.closest('.paper');
    let hovered = false;
    let focused = false;
    let inView = true;
    let revision = 0;

    function syncPlayback() {
      const current = ++revision;
      const play = (hovered || focused) && inView && !document.hidden && !reducedMotion.matches;
      if (!play) {
        video.pause();
        media.classList.remove('is-playing');
        return;
      }

      video.play().then(() => {
        if (current === revision) media.classList.add('is-playing');
      }).catch(() => {
        if (current === revision) media.classList.remove('is-playing');
      });
    }

    paper.addEventListener('pointerenter', (event) => {
      if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return;
      hovered = true;
      syncPlayback();
    });
    paper.addEventListener('pointerleave', () => {
      hovered = false;
      syncPlayback();
    });
    media.addEventListener('focus', () => {
      focused = media.matches(':focus-visible');
      syncPlayback();
    });
    media.addEventListener('blur', () => {
      focused = false;
      syncPlayback();
    });
    video.addEventListener('error', () => media.classList.remove('is-playing'));
    document.addEventListener('visibilitychange', syncPlayback);
    reducedMotion.addEventListener('change', syncPlayback);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(([entry]) => {
        inView = entry.isIntersecting;
        syncPlayback();
      }).observe(media);
    }
  });
})();
