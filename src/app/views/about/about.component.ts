import { PROFILE, EXPERIENCE } from '../../data/profile';
import { IconComponent } from '../../components/icon/icon.component';
import { Component } from '@angular/core';
import { MusicPlayerComponent } from '../../components/music-player/music-player.component';
import { ScrollSceneDirective } from '../../components/scroll-scene.directive';
import { Localized } from '../../i18n/locale.service';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    IconComponent,
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
        name: this.t('Diseño de producto', 'Product design'),
        items: this.t(
          'Research · Arquitectura de información · Flujos de usuario · Prototipado · Sistemas de diseño · Usabilidad y accesibilidad',
          'Research · Information architecture · User flows · Prototyping · Design systems · Usability and accessibility',
        ),
      },
      {
        name: this.t('Dirección de diseño', 'Design leadership'),
        items: this.t(
          'Definición de producto · Coordinación de equipo · Revisiones de diseño · Documentación · Pruebas y QA',
          'Product definition · Team coordination · Design reviews · Documentation · Testing and QA',
        ),
      },
      {
        name: this.t('Herramientas de diseño', 'Design tools'),
        items: 'Figma · FigJam · Illustrator · Photoshop · InDesign · After Effects',
      },
      {
        name: this.t('IA y agentes', 'AI and agents'),
        items: this.t(
          'Codex · Agent harnesses · MCP · Prototipado asistido por IA · Automatización · Revisión de resultados',
          'Codex · Agent harnesses · MCP · AI-assisted prototyping · Automation · Output review',
        ),
      },
      {
        name: this.t('Desarrollo e integración', 'Development and integration'),
        items: 'HTML/CSS · JavaScript · TypeScript · Angular · React · Node.js · SQL · APIs · Git',
      },
    ];
  }
}
