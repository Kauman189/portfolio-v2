import { Injectable, NgZone, inject } from '@angular/core';
import { animate } from 'motion/mini';
import { inView } from 'motion';

@Injectable({ providedIn: 'root' })
export class MotionService {
  private zone = inject(NgZone);
  private stops: Array<() => void> = [];

  observe(root: HTMLElement) {
    this.destroy();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    this.zone.runOutsideAngular(() => {
      root.querySelectorAll<HTMLElement>('.home-intro .name-mask > span')
        .forEach((word, index) => {
          animate(word, {
            transform: ['translateY(105%)', 'translateY(0%)'],
          }, { duration: 1.05, delay: 0.12 + index * 0.16, ease: [0.22, 1, 0.36, 1] });
        });

      const selectors = [
        '.rail-intro', '.rail-card', '.project-index-row', '.process-step',
        '.home-statement', '.case-header', '.case-cover', '.case-context',
        '.case-challenge', '.case-depth-intro', '.case-depth-item',
        '.case-section-head', '.case-flow li', '.case-decision', '.case-outcome',
        '.case-learning', '.case-process-gallery', '.next-project',
        '.work-archive', '.experience-row', '.experience-entry',
        '.education-row', '.about-main figure', '.about-copy',
        '.moodboard-heading', '.principle-card', '.about-listening',
        '.ability', '.about-next', '.off-duty', '.enquiry-intro',
        '.form-field', '.service-options', '.form-submit', '.contact-links>a',
        '.footer-top',
      ].join(',');

      root.querySelectorAll<HTMLElement>(selectors).forEach((element, index) => {
        const isCard = element.classList.contains('rail-card');
        if (isCard && !element.previousElementSibling) return;
        const stop = inView(element, () => {
          animate(element, isCard ? { opacity: [0, 1] } : {
            opacity: [0, 1],
            transform: ['translateY(28px)', 'translateY(0px)'],
          }, {
            duration: isCard ? 0.95 : 0.72,
            delay: isCard ? Math.min(index * 0.09, 0.3) : (index % 3) * 0.06,
            ease: [0.22, 1, 0.36, 1],
          });
        }, { margin: '0px 0px -25px 0px' });
        this.stops.push(stop);
      });
    });
  }

  destroy() {
    this.stops.forEach((stop) => stop());
    this.stops = [];
  }
}
