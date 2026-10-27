import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../data/projects';
import { Localized, Bilingual } from '../../i18n/locale.service';
import { IconComponent } from '../icon/icon.component';
@Component({
  selector: 'app-project-index',
  standalone: true,
  imports: [RouterLink, IconComponent],
  template: ` <div class="project-index">
    @for (project of projects; track project.slug) {
      <a class="project-index-row" [class.project-index-visual]="project.featuredRank && project.displayImage" [routerLink]="['/projects', project.slug]">
        @if (project.featuredRank && project.displayImage) {
          <div class="index-preview" [class.index-preview-phones]="project.imageLayout === 'phone'">
            @if (project.imageLayout === 'phone') {
              @for (image of project.processImages.slice(0, 3); track image.src) {
                <img [src]="image.src" [alt]="image.caption ? l(image.caption) : image.alt" loading="lazy" width="390" height="844" />
              }
            } @else {
              <img [src]="project.displayImage" [alt]="t(project.titleEs, project.title)" loading="lazy" width="1440" height="1024" />
            }
          </div>
        }
        <span
          ><span class="index-title">{{
            t(project.featuredRank ? project.titleEs : project.shortTitleEs, project.featuredRank ? project.title : project.shortTitle)
          }}</span
          ><span class="index-description">{{
            project.statusText
              ? l(project.statusText) + ' · ' + l(project.cardSummary ?? descriptions[project.slug])
              : l(project.cardSummary ?? descriptions[project.slug])
          }}</span></span
        ><app-icon name="up-right" />
      </a>
    }
  </div>`,
  styles: [
    `
      :host {
        display: block;
      }
      .project-index {
        display: flex;
        flex-direction: column;
        gap: 25px;
      }
      .project-index-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 28px;
        padding: 24px 0;
        min-height: 96px;
        transition:
          color 0.3s,
          transform 0.5s var(--ease),
          opacity 0.8s var(--ease),
          translate 0.8s var(--ease),
          filter 0.8s var(--ease);
        transition-delay:
          0s, 0s, var(--reveal-delay, 0ms), var(--reveal-delay, 0ms),
          var(--reveal-delay, 0ms);
      }
      .index-title {
        display: block;
        font-family: var(--font-headings);
        font-size: 21px;
        line-height: 1.35;
        letter-spacing: -0.035em;
      }
      .index-description {
        display: block;
        font-size: 12px;
        line-height: 1.7;
        color: var(--muted);
        margin-top: 9px;
        max-width: 300px;
      }
      .project-index-row > app-icon {
        font-size: 15px;
        color: #83837b;
        transition: transform 0.5s var(--ease);
      }
@media (min-width: 760px) and (hover: hover) and (pointer: fine) {
      .project-index-row:hover {
        color: var(--accent);
      }
}
      .project-index-row:hover > app-icon {
        transform: translate(3px, -3px);
      }
      .project-index-row:active {
        transform: translateX(3px);
      }
      .project-index-visual { display: grid; grid-template-columns: 1fr auto; gap: 20px; padding-top: 0; }
      .index-preview { grid-column: 1 / -1; display: flex; align-items: center; justify-content: center; width: 100%; aspect-ratio: 1.5; background: #fff; overflow: hidden; border: 1px solid var(--line); }
      .index-preview img { display: block; width: 100%; height: 100%; object-fit: contain; }
      .index-preview-phones { gap: 4%; padding: 24px 7%; background: #f0f2f4; }
      .index-preview-phones img { width: 28%; height: auto; max-height: 100%; border-radius: 12px; }
      .project-index-visual .index-description { max-width: 38ch; }
      @media (prefers-reduced-motion: reduce) {
        .project-index-row,
        .project-index-row > app-icon {
          transition: none;
          transform: none;
        }
      }
    `,
  ],
})
export class ProjectIndexComponent extends Localized {
  @Input() projects: Project[] = [];
  readonly descriptions: Record<string, Bilingual> = {
    altura: ['Una experiencia de coworking.', 'A coworking experience.'],
    'acera-jku': [
      'Comunicación visual para la comunidad científica.',
      'Visual communication for the research community.',
    ],
    'autotok-poster': [
      'Una presentación del producto en papel.',
      'A product presentation in print.',
    ],
    'autotok-web': [
      'La primera impresión de un producto digital.',
      'A digital product’s first impression.',
    ],
    'autotok-dashboard': [
      'La gestión del producto, en una interfaz.',
      'Product management in one interface.',
    ],
  };
}
