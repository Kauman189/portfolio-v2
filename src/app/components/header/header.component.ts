import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Localized } from '../../i18n/locale.service';
import { IconComponent } from '../icon/icon.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, IconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent extends Localized {}
