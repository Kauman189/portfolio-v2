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
      <a class="project-index-row" [routerLink]="['/projects', project.slug]">
        <span
          ><span class="index-title">{{
            t(project.shortTitleEs, project.shortTitle)
          }}</span
          ><span class="index-description">{{
            l(descriptions[project.slug])
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
      .project-index-row:hover {
        color: var(--accent);
      }
      .project-index-row:hover > app-icon {
        transform: translate(3px, -3px);
      }
      .project-index-row:active {
        transform: translateX(3px);
      }
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
    'its-time': [
      'Una interfaz para registrar y revisar el tiempo.',
      'An interface for recording and reviewing time.',
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
