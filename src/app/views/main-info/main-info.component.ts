import { ProjectIndexComponent } from '../../components/project-index/project-index.component';
import { ViewportService } from '../../services/viewport.service';
import { PROJECTS } from '../../data/projects';
import { PROFILE, EXPERIENCE } from '../../data/profile';
import { IconComponent } from '../../components/icon/icon.component';
import { Localized } from '../../i18n/locale.service';
import { HowIWorkComponent } from '../../components/how-i-work/how-i-work.component';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectOrbitComponent } from '../../components/project-orbit/project-orbit.component';
@Component({
  selector: 'app-main-info',
  standalone: true,
  imports: [
    ProjectIndexComponent,
    IconComponent,
    HowIWorkComponent,
    RouterLink,
    ProjectOrbitComponent,
  ],
  templateUrl: './main-info.component.html',
  styleUrl: './main-info.component.css',
})
export class MainInfoComponent extends Localized {
  readonly mobile = inject(ViewportService).mobile;
  readonly profile = PROFILE;
  readonly experience = EXPERIENCE.slice(0, 2);
  readonly selected = [PROJECTS[0], PROJECTS[2], PROJECTS[4], PROJECTS[1]];
}
