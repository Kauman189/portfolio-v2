import { Localized } from '../../i18n/locale.service';
import { HowIWorkComponent } from '../../components/how-i-work/how-i-work.component';
import { LivingMarkComponent } from '../../components/living-mark/living-mark.component';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectOrbitComponent } from '../../components/project-orbit/project-orbit.component';
@Component({
  selector: 'app-main-info',
  standalone: true,
  imports: [
    HowIWorkComponent,
    LivingMarkComponent,
    RouterLink,
    ProjectOrbitComponent,
  ],
  templateUrl: './main-info.component.html',
  styleUrl: './main-info.component.css',
})
export class MainInfoComponent extends Localized {}
