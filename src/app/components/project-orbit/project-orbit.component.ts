import { IconComponent } from '../icon/icon.component';
import { Localized } from '../../i18n/locale.service';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  NgZone,
  OnDestroy,
  QueryList,
  ViewChildren,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { PROJECTS } from '../../data/projects';
import { orbitPosition, wrapIndex } from './orbit-math';
import { LivingMarkComponent } from '../living-mark/living-mark.component';
@Component({
  selector: 'app-project-orbit',
  standalone: true,
  imports: [IconComponent, LivingMarkComponent],
  templateUrl: './project-orbit.component.html',
  styleUrl: './project-orbit.component.css',
})
export class ProjectOrbitComponent
  extends Localized
  implements AfterViewInit, OnDestroy
{
  @ViewChildren('orbitCard', { read: ElementRef }) cards!: QueryList<
    ElementRef<HTMLAnchorElement>
  >;
  projects = PROJECTS;
  activeIndex = 0;
  dragging = false;
  paused = false;
  reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  private phase = 0;
  private target = 0;
  private frame = 0;
  private lastTime = 0;
  private startX = 0;
  private startY = 0;
  private pointerId: number | null = null;
  private dragged = false;
  private zone = inject(NgZone);
  private router = inject(Router);
  private motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  onFocusOut(event: FocusEvent) {
    if (
      !(event.currentTarget as HTMLElement).contains(
        event.relatedTarget as Node | null,
      )
    )
      this.paused = false;
  }

  ngAfterViewInit() {
    this.motion.addEventListener('change', this.onMotionChange);
    this.render();
    this.zone.runOutsideAngular(
      () => (this.frame = requestAnimationFrame(this.animate)),
    );
  }
  private onMotionChange = (event: MediaQueryListEvent) => {
    this.zone.run(() => (this.reducedMotion = event.matches));
  };
  private animate = (now: number) => {
    const elapsed = Math.min(now - (this.lastTime || now), 40);
    this.lastTime = now;
    if (!document.hidden) {
      if (!this.paused && !this.dragging && !this.reducedMotion)
        this.target += (elapsed * this.projects.length) / 65000;
      this.phase = this.reducedMotion
        ? this.target
        : this.phase +
          (this.target - this.phase) * (1 - Math.exp(-elapsed / 160));
      this.render();
      const active = wrapIndex(Math.round(this.phase), this.projects.length);
      if (active !== this.activeIndex)
        this.zone.run(() => (this.activeIndex = active));
    }
    this.frame = requestAnimationFrame(this.animate);
  };
  private render() {
    this.cards.forEach((card, index) => {
      const p = orbitPosition(index, this.phase, this.projects.length);
      card.nativeElement.style.left = p.x + '%';
      card.nativeElement.style.top = p.y + '%';
      card.nativeElement.style.transform = `translate(-50%, -50%) rotate(${p.tilt}deg)`;
      card.nativeElement.style.zIndex = String(Math.round(p.y));
    });
  }
  rotate(direction: number) {
    this.target = Math.round(this.target) + direction;
  }
  startDrag(event: PointerEvent) {
    if (event.button !== 0) return;
    this.startX = event.clientX;
    this.startY = event.clientY;
    this.pointerId = event.pointerId;
    this.dragged = false;
  }
  @HostListener('window:pointermove', ['$event']) moveDrag(
    event: PointerEvent,
  ) {
    if (this.pointerId !== event.pointerId) return;
    const dx = event.clientX - this.startX;
    if (
      Math.abs(dx) > 8 &&
      Math.abs(dx) > Math.abs(event.clientY - this.startY)
    ) {
      this.dragging = true;
      this.dragged = true;
      this.target -= dx / 160;
      this.startX = event.clientX;
    }
  }
  @HostListener('window:pointerup') endDrag() {
    this.pointerId = null;
    this.dragging = false;
  }
  @HostListener('window:pointercancel') cancelDrag() {
    this.pointerId = null;
    this.dragging = false;
  }
  openProject(event: MouseEvent, slug: string) {
    if (this.dragged) {
      event.preventDefault();
      this.dragged = false;
      return;
    }
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
      return;
    event.preventDefault();
    this.router.navigate(['/projects', slug]);
  }
  onKey(event: KeyboardEvent) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      this.paused = true;
      this.rotate(event.key === 'ArrowRight' ? 1 : -1);
    }
  }
  ngOnDestroy() {
    cancelAnimationFrame(this.frame);
    this.motion.removeEventListener('change', this.onMotionChange);
  }
}
