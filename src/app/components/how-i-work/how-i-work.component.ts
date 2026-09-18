import { Component } from '@angular/core';
import { Localized } from '../../i18n/locale.service';
@Component({
  selector: 'app-how-i-work',
  standalone: true,
  imports: [],
  templateUrl: './how-i-work.component.html',
  styleUrl: './how-i-work.component.css',
})
export class HowIWorkComponent extends Localized {
  get steps() {
    return [
      {
        title: this.t('Entender el problema.', 'Understand the problem.'),
        body: this.t(
          'Aclaro requisitos, personas y restricciones antes de definir un flujo.',
          'I clarify requirements, users and constraints before shaping a flow.',
        ),
      },
      {
        title: this.t('Diseñar el recorrido.', 'Design the journey.'),
        body: this.t(
          'Organizo la información y trabajo en flujos, componentes y estados que el producto necesita.',
          'I organize information and work through the flows, components and states the product needs.',
        ),
      },
      {
        title: this.t('Construir y revisar.', 'Build and refine.'),
        body: this.t(
          'Llevo el diseño a código, compruebo los detalles en funcionamiento y ajusto lo que haga falta.',
          'I bring the design into code, check how it works and adjust the details that need it.',
        ),
      },
    ];
  }
}
