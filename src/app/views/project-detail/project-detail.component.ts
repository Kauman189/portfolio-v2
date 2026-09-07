import { IconComponent } from '../../components/icon/icon.component';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PROJECTS, Project } from '../../data/projects';
import { CASE_STUDIES, CaseStudy } from '../../data/case-studies';
import { Localized } from '../../i18n/locale.service';
import { LivingMarkComponent } from '../../components/living-mark/living-mark.component';
@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [IconComponent, RouterLink, LivingMarkComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css',
})
export class ProjectDetailComponent extends Localized {
  project: Project | undefined;
  study: CaseStudy | undefined;
  nextProject = PROJECTS[0];
  get toolsLabel() {
    const names: Record<string, string> = {
      'Print Design': 'Diseño impreso',
      'Interface Design': 'Diseño de interfaces',
      'Team Leadership': 'Dirección de equipo',
    };
    return this.project?.tools
      .map((tool) => this.t(names[tool] ?? tool, tool))
      .join(' · ');
  }
  constructor() {
    super();
    inject(ActivatedRoute)
      .paramMap.pipe(takeUntilDestroyed())
      .subscribe((params) => {
        const index = PROJECTS.findIndex((p) => p.slug === params.get('slug'));
        this.project = PROJECTS[index];
        this.study = this.project ? CASE_STUDIES[this.project.slug] : undefined;
        this.nextProject = PROJECTS[(index + 1) % PROJECTS.length];
      });
  }
}
