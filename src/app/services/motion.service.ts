import { Injectable, NgZone, inject } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class MotionService {
  private zone = inject(NgZone);
  private observer?: IntersectionObserver;
  observe(root: HTMLElement) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    this.zone.runOutsideAngular(() => {
      this.observer?.disconnect();
      this.observer ??= new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              this.observer?.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.07, rootMargin: '0px 0px -25px 0px' },
      );
      root
        .querySelectorAll(
          '.project-index-row,.experience-row,.mobile-experience,.process-step,.experience-entry,.education-row,.home-statement,.work-picture,.work-detail,.case-cover,.case-context,.case-challenge,.case-section-head,.case-flow li,.case-decision,.case-detail-image,.case-facts>div,.case-measurement,.case-learning,.case-process-gallery,.next-project,.about-main figure,.about-copy,.moodboard-heading,.principle-card,.about-listening,.work-interlude,.ability,.about-next,.off-duty,.contact-links>a,.contact-bottom>div:first-child,.footer-top,.enquiry-intro,.form-field,.service-options,.form-submit',
        )
        .forEach((el, i) => {
          if (el.classList.contains('is-revealed')) return;
          el.classList.add('scroll-reveal');
          (el as HTMLElement).style.setProperty(
            '--reveal-delay',
            `${(i % 3) * 40}ms`,
          );
          this.observer?.observe(el);
        });
    });
  }
  destroy() {
    this.observer?.disconnect();
  }
}
