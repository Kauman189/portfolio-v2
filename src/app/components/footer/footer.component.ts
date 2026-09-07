import { Localized } from '../../i18n/locale.service';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent extends Localized {
  year = new Date().getFullYear();
}
