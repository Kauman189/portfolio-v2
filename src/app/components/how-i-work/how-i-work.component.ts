import { Component } from '@angular/core';
import { Localized } from '../../i18n/locale.service';
import { ScrollSceneDirective } from '../scroll-scene.directive';
import { LivingMarkComponent } from '../living-mark/living-mark.component';
@Component({
  selector: 'app-how-i-work',
  standalone: true,
  imports: [ScrollSceneDirective, LivingMarkComponent],
  templateUrl: './how-i-work.component.html',
  styleUrl: './how-i-work.component.css',
})
export class HowIWorkComponent extends Localized {
  get steps() {
    return [
      {
        label: this.t('Entender', 'Understand'),
        title: this.t(
          'Empezar por\nlas preguntas correctas.',
          'Start with\nthe right questions.',
        ),
        body: this.t(
          'Escucho, investigo y organizo las necesidades de las personas. Entender el problema da dirección al proyecto antes de dibujar una pantalla.',
          'I listen, research and organize people’s needs. Understanding the problem gives the project direction before drawing a screen.',
        ),
      },
      {
        label: this.t('Explorar', 'Explore'),
        title: this.t(
          'Dar espacio\na las posibilidades.',
          'Make room\nfor possibilities.',
        ),
        body: this.t(
          'Las ideas se convierten en recorridos, bocetos y wireframes. Exploro la estructura antes de comprometerme con los detalles.',
          'Ideas become flows, sketches and wireframes. I explore the structure before committing to the details.',
        ),
      },
      {
        label: this.t('Diseñar', 'Design'),
        title: this.t(
          'Dar a la idea\nun lenguaje propio.',
          'Give the idea\na visual language.',
        ),
        body: this.t(
          'Tipografía, color e interacción se conectan en un sistema. Cada decisión busca claridad, función y una sensación coherente.',
          'Type, color and interaction connect in a system. Each decision serves clarity, function and a coherent feeling.',
        ),
      },
      {
        label: this.t('Afinar', 'Refine'),
        title: this.t(
          'Probar. Aprender.\nVolver a mirar.',
          'Try it. Learn.\nLook again.',
        ),
        body: this.t(
          'Prototipo, pruebo e itero. La colaboración y mi perspectiva técnica ayudan a llevar la intención del diseño hasta su implementación.',
          'I prototype, test and iterate. Collaboration and my technical perspective help carry design intent through to implementation.',
        ),
      },
    ];
  }
}
