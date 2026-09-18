import { ProjectIndexComponent } from '../../components/project-index/project-index.component';
import { SelectedWorkRailComponent } from '../../components/selected-work-rail/selected-work-rail.component';
import { ViewportService } from '../../services/viewport.service';
import { IconComponent } from '../../components/icon/icon.component';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SELECTED_PROJECTS, ARCHIVE_PROJECTS } from '../../data/projects';
import { Localized } from '../../i18n/locale.service';
import { LivingMarkComponent } from '../../components/living-mark/living-mark.component';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectIndexComponent,
    SelectedWorkRailComponent,
    IconComponent,
    RouterLink,
    LivingMarkComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent extends Localized {
  readonly mobile = inject(ViewportService).mobile;
  projects = SELECTED_PROJECTS;
  archive = ARCHIVE_PROJECTS;
}
