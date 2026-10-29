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
  get strengths() {
    return [
      {
        title: this.t('Research que orienta.', 'Research that informs decisions.'),
        body: this.t(
          'Hago entrevistas, analizo necesidades y pruebo propuestas. Uso el feedback para revisar decisiones y ajustar el diseño.',
          'I interview users, analyze needs and test ideas. Feedback helps me revisit decisions and refine the design.',
        ),
      },
      {
        title: this.t('Claridad en productos complejos.', 'Clarity in complex products.'),
        body: this.t(
          'Trabajo en retail, pagos y SaaS. Organizo recorridos e información para que las tareas y las opciones se entiendan.',
          'I work across retail, payments and SaaS, organizing journeys and information to make tasks and choices clear.',
        ),
      },
      {
        title: this.t('Dirección de diseño, en equipo.', 'Design leadership, with the team.'),
        body: this.t(
          'Alineo al equipo con prototipos y revisiones. Acompaño el diseño hasta la entrega y compruebo la experiencia con pruebas y QA.',
          'I align the team through prototypes and design reviews, stay involved through delivery and check the experience through testing and QA.',
        ),
      },
    ];
  }
}
