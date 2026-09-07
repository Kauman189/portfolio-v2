import { ProjectIndexComponent } from '../../components/project-index/project-index.component';
import { ViewportService } from '../../services/viewport.service';
import { IconComponent } from '../../components/icon/icon.component';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../../data/projects';
import { CASE_STUDIES } from '../../data/case-studies';
import { Localized } from '../../i18n/locale.service';
import { ScrollSceneDirective } from '../../components/scroll-scene.directive';
import { LivingMarkComponent } from '../../components/living-mark/living-mark.component';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectIndexComponent,
    IconComponent,
    RouterLink,
    ScrollSceneDirective,
    LivingMarkComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent extends Localized {
  readonly mobile = inject(ViewportService).mobile;
  projects = PROJECTS;
  cases = CASE_STUDIES;
}
