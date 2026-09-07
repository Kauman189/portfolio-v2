import { PROFILE, EXPERIENCE } from '../../data/profile';
import { IconComponent } from '../../components/icon/icon.component';
import { Component } from '@angular/core';
import { MusicPlayerComponent } from '../../components/music-player/music-player.component';
import { ScrollSceneDirective } from '../../components/scroll-scene.directive';
import { RouterLink } from '@angular/router';
import { Localized } from '../../i18n/locale.service';
import { LivingMarkComponent } from '../../components/living-mark/living-mark.component';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    IconComponent,
    RouterLink,
    LivingMarkComponent,
    MusicPlayerComponent,
    ScrollSceneDirective,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent extends Localized {
  readonly profile = PROFILE;
  readonly experience = EXPERIENCE;
  get skills() {
    return [
      {
        name: this.t('Diseño UX/UI', 'UX/UI design'),
        items: this.t(
          'Investigación de usuarios · Wireframes · Prototipos · Sistemas de diseño · Tests de usabilidad · Accesibilidad · Arquitectura de información · Diseño responsive',
          'User research · Wireframing · Prototyping · Design systems · Usability testing · Accessibility · Information architecture · Responsive design',
        ),
      },
      {
        name: this.t('Herramientas de diseño', 'Design tools'),
        items:
          'Figma · Adobe XD · Photoshop · Illustrator · InDesign · After Effects · Jira · Git',
      },
      {
        name: this.t('Colaboración', 'Collaboration'),
        items: this.t(
          'Trabajo en equipo · Comunicación · Agile/Scrum · Empatía · Gestión de proyectos · Soporte técnico · Documentación · Formación',
          'Teamwork · Communication · Agile/Scrum · Empathy · Project management · Technical support · Documentation · Training',
        ),
      },
      {
        name: this.t('Desarrollo creativo', 'Creative development'),
        items:
          'HTML/CSS · JavaScript · TypeScript · Angular · React · Node.js · PHP · Java · SQL · NoSQL · REST APIs · Linux',
      },
    ];
  }
  get references() {
    return [
      {
        name: this.t('Diseño gráfico', 'Graphic design'),
        items:
          'Dieter Rams · Paul Rand · Josef Müller-Brockmann · Massimo Vignelli',
      },
      {
        name: this.t('Estudios', 'Studios'),
        items: 'Pentagram · Moving Brands · MetaDesign · Ammunition Group',
      },
      {
        name: this.t('Experiencias digitales', 'Digital experiences'),
        items: 'Apple Design Team · Google Material · Stripe · Linear',
      },
    ];
  }
}
