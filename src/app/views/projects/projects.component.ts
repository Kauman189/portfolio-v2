import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../../data/projects';
import { CASE_STUDIES } from '../../data/case-studies';
import { Localized } from '../../i18n/locale.service';
import { ScrollSceneDirective } from '../../components/scroll-scene.directive';
import { LivingMarkComponent } from '../../components/living-mark/living-mark.component';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink, ScrollSceneDirective, LivingMarkComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent extends Localized {
  projects = PROJECTS;
  cases = CASE_STUDIES;
}
