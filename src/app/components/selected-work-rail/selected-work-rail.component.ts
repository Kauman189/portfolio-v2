import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../data/projects';
import { Localized } from '../../i18n/locale.service';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-selected-work-rail',
  standalone: true,
  imports: [RouterLink, IconComponent],
  templateUrl: './selected-work-rail.component.html',
  styleUrl: './selected-work-rail.component.css',
})
export class SelectedWorkRailComponent extends Localized {
  @Input({ required: true }) projects: Project[] = [];
  @ViewChild('track') track?: ElementRef<HTMLElement>;
  activeIndex = 1;

  updateActive() {
    const track = this.track?.nativeElement;
    if (!track) return;
    const midpoint = track.scrollLeft + track.clientWidth / 2;
    const cards = Array.from(track.querySelectorAll<HTMLElement>('.rail-card'));
    const closest = cards.reduce((best, card, index) => {
      const center = card.offsetLeft + card.offsetWidth / 2;
      return Math.abs(center - midpoint) < best.distance
        ? { index: index + 1, distance: Math.abs(center - midpoint) }
        : best;
    }, { index: 1, distance: Number.POSITIVE_INFINITY });
    this.activeIndex = closest.index;
  }

  move(direction: number) {
    const track = this.track?.nativeElement;
    const card = track?.querySelector<HTMLElement>('.rail-card');
    if (!track || !card) return;
    const gap = 22;
    track.scrollBy({
      left: direction * (card.offsetWidth + gap),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
  }
}
