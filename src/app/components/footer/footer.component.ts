import { LivingMarkComponent } from '../living-mark/living-mark.component';
import { IconComponent } from '../icon/icon.component';
import { Localized } from '../../i18n/locale.service';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LivingMarkComponent, IconComponent, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent extends Localized {
  year = new Date().getFullYear();
}
