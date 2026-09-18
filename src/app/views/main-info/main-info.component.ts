import { ProjectIndexComponent } from '../../components/project-index/project-index.component';
import { SelectedWorkRailComponent } from '../../components/selected-work-rail/selected-work-rail.component';
import { ViewportService } from '../../services/viewport.service';
import { SELECTED_PROJECTS } from '../../data/projects';
import { PROFILE, EXPERIENCE } from '../../data/profile';
import { IconComponent } from '../../components/icon/icon.component';
import { Localized } from '../../i18n/locale.service';
import { HowIWorkComponent } from '../../components/how-i-work/how-i-work.component';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-main-info',
  standalone: true,
  imports: [
    ProjectIndexComponent,
    SelectedWorkRailComponent,
    IconComponent,
    HowIWorkComponent,
    RouterLink,
  ],
  templateUrl: './main-info.component.html',
  styleUrl: './main-info.component.css',
})
export class MainInfoComponent extends Localized {
  readonly mobile = inject(ViewportService).mobile;
  readonly profile = PROFILE;
  readonly experience = EXPERIENCE.slice(0, 2);
  readonly selected = SELECTED_PROJECTS;
}
