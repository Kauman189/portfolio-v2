import {
  Directive,
  ElementRef,
  NgZone,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
export function sceneProgress(
  top: number,
  height: number,
  viewport: number,
): number {
  return Math.max(0, Math.min(1, -top / Math.max(1, height - viewport)));
}
@Directive({ selector: '[appScrollScene]', standalone: true })
export class ScrollSceneDirective implements OnInit, OnDestroy {
  private element: ElementRef<HTMLElement> = inject(ElementRef);
  private zone = inject(NgZone);
  private frame = 0;
  private resize?: ResizeObserver;
  private cleanup = () => {};
  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      const el = this.element.nativeElement;
      const update = () => {
        this.frame = 0;
        const rect = el.getBoundingClientRect(),
          p = sceneProgress(rect.top, rect.height, window.innerHeight);
        el.style.setProperty('--scene-progress', String(p));
        el.style.setProperty('--scene-angle', `${p * 360}deg`);
        const phase = Math.min(3, Math.floor(p * 4));
        if (el.getAttribute('data-phase') !== String(phase)) {
          el.setAttribute('data-phase', String(phase));
          el.querySelectorAll('.process-nav').forEach((button, index) => {
            if (index === phase) button.setAttribute('aria-current', 'step');
            else button.removeAttribute('aria-current');
          });
        }
      };
      const schedule = () => {
        if (!this.frame) this.frame = requestAnimationFrame(update);
      };
      window.addEventListener('scroll', schedule, { passive: true });
      window.addEventListener('resize', schedule, { passive: true });
      this.resize = new ResizeObserver(schedule);
      this.resize.observe(el);
      this.cleanup = () => {
        window.removeEventListener('scroll', schedule);
        window.removeEventListener('resize', schedule);
      };
      update();
    });
  }
  ngOnDestroy() {
    cancelAnimationFrame(this.frame);
    this.resize?.disconnect();
    this.cleanup();
  }
}
