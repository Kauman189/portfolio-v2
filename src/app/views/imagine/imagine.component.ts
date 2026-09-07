import { IconComponent } from '../../components/icon/icon.component';
import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Localized, Bilingual } from '../../i18n/locale.service';
import type { WebGLRenderer } from 'three';
import type { PondWorld } from './pond/pond-world';
import { storyAtScroll, STORY_BEATS } from './pond/story-motion';

@Component({
  selector: 'app-imagine',
  standalone: true,
  imports: [IconComponent, RouterLink],
  templateUrl: './imagine.component.html',
  styleUrl: './imagine.component.css',
})
export class ImagineComponent
  extends Localized
  implements AfterViewInit, OnDestroy
{
  @ViewChild('film', { static: true }) film!: ElementRef<HTMLElement>;
  @ViewChild('stage', { static: true }) stage!: ElementRef<HTMLElement>;
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  ready = signal(false);
  unavailable = signal(false);
  readonly chapters: { title: Bilingual; text: Bilingual; source?: boolean }[] =
    [
      {
        title: ['Antes de la forma.', 'Before form.'],
        text: [
          'Antes de elegir una forma, conviene permanecer un rato frente a lo que hay.',
          'Before choosing a form, it helps to spend some time with what is already there.',
        ],
      },
      {
        title: ['Una presencia.', 'A presence.'],
        text: [
          'Algo aparece y cambia la composición. El espacio vacío también tenía algo que decir.',
          'Something appears and changes the composition. The empty space had something to say, too.',
        ],
      },
      {
        title: ['Mirar. Ser visto.', 'Seeing. Being seen.'],
        text: [
          '«El ojo que ves no es ojo porque tú lo veas; es ojo porque te ve.»',
          '“The eye you see is not an eye because you see it; it is an eye because it sees you.”',
        ],
        source: true,
      },
      {
        title: ['Probar la distancia.', 'Trying the distance.'],
        text: [
          'Hay cosas que solo se entienden al intentarlas. Un primer trazo, una medida, un movimiento.',
          'Some things only become clear when you try them. A first line, a measurement, a movement.',
        ],
      },
      {
        title: ['Volver a ajustar.', 'Adjusting again.'],
        text: [
          'Lo que no encaja señala por dónde continuar. Se mira de nuevo. Se cambia un poco.',
          'What does not fit suggests where to go next. Look again. Change a little.',
        ],
      },
      {
        title: ['Un detalle.', 'A detail.'],
        text: [
          'Una forma pequeña puede cambiar el sentido del conjunto. A veces basta con colocarla en el lugar adecuado.',
          'A small form can change the meaning of the whole. Sometimes it is enough to put it in the right place.',
        ],
      },
      {
        title: ['Dejar espacio.', 'Making room.'],
        text: [
          'Acercarse también es aprender cuánto espacio necesita el otro.',
          'Coming closer also means learning how much space the other needs.',
        ],
      },
      {
        title: ['Responder al momento.', 'Responding to the moment.'],
        text: [
          'Cuando cambia el contexto, cambia la forma. La misma hoja encuentra otro uso.',
          'When the context changes, the form changes. The same leaf finds another use.',
        ],
      },
      {
        title: ['Lo que permanece.', 'What remains.'],
        text: [
          'Pasa la lluvia. Queda lo que ha servido para estar un poco mejor.',
          'The rain passes. What remains is what helped make things a little better.',
        ],
      },
      {
        title: ['Encontrar el ritmo.', 'Finding a rhythm.'],
        text: [
          'Entre un gesto y el siguiente hay una pausa. El movimiento también se diseña con silencios.',
          'Between one gesture and the next, there is a pause. Movement is shaped by moments of stillness, too.',
        ],
      },
      {
        title: ['Entenderse.', 'Understanding.'],
        text: [
          'Llega un momento en que sobran las explicaciones. La relación entre las partes se vuelve clara.',
          'There comes a point when explanations fall away. The relationship between the parts becomes clear.',
        ],
      },
      {
        title: ['Quedarse.', 'Staying.'],
        text: [
          'El lugar es el mismo. La manera de habitarlo ha cambiado.',
          'The place is the same. The way of being in it has changed.',
        ],
      },
    ];
  private zone = inject(NgZone);
  private renderer?: WebGLRenderer;
  private world?: PondWorld;
  private frame = 0;
  private destroyed = false;
  private visible = true;
  private target = 0;
  private anchors: number[] = [];
  private progress = 0;
  private elapsed = 0;
  private last = 0;
  private dirty = true;
  private reduced = matchMedia('(prefers-reduced-motion: reduce)');
  private observer?: IntersectionObserver;
  private resizeObserver?: ResizeObserver;
  private cleanups: (() => void)[] = [];
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => void this.init());
  }
  private async init() {
    try {
      const [T, { PondWorld }] = await Promise.all([
        import('three'),
        import('./pond/pond-world'),
      ]);
      if (this.destroyed) return;
      this.renderer = new T.WebGLRenderer({
        canvas: this.canvas.nativeElement,
        antialias: true,
        alpha: false,
        powerPreference: 'low-power',
      });
      this.renderer.setPixelRatio(
        Math.min(devicePixelRatio || 1, innerWidth < 760 ? 1.5 : 1.75),
      );
      this.renderer.outputColorSpace = T.SRGBColorSpace;
      this.renderer.toneMapping = T.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = 1.1;
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = T.PCFSoftShadowMap;
      this.world = new PondWorld();
      this.resize();
      this.readScroll();
      this.progress = this.target;
      this.world.update(this.progress, 0, this.reduced.matches);
      this.renderer.render(this.world.scene, this.world.camera);
      this.zone.run(() => this.ready.set(true));
      const on = (target: EventTarget, type: string, action: EventListener) => {
        target.addEventListener(type, action, { passive: true });
        this.cleanups.push(() => target.removeEventListener(type, action));
      };
      on(window, 'scroll', this.readScroll);
      on(window, 'resize', this.resize);
      on(document, 'visibilitychange', this.visibility);
      on(this.reduced, 'change', this.preferenceChanged);
      on(this.canvas.nativeElement, 'webglcontextlost', this.contextLost);
      this.resizeObserver = new ResizeObserver(this.resize);
      this.resizeObserver.observe(this.stage.nativeElement);
      this.observer = new IntersectionObserver(
        (entries) => {
          this.visible = entries[0].isIntersecting;
          this.wake();
        },
        { rootMargin: '100px' },
      );
      this.observer.observe(this.film.nativeElement);
      this.wake();
    } catch {
      this.release();
      if (!this.destroyed) this.zone.run(() => this.unavailable.set(true));
    }
  }
  private readScroll = () => {
    const el = this.film.nativeElement;
    const top = el.getBoundingClientRect().top;
    this.target = storyAtScroll(-top, this.anchors);
    this.stage.nativeElement.style.setProperty(
      '--film-progress',
      String(this.target),
    );
    this.stage.nativeElement.style.setProperty(
      '--chapter',
      String(Math.min(12, 1 + Math.floor(this.target * 12))),
    );
    this.dirty = true;
    this.wake();
  };
  private resize = () => {
    if (!this.renderer || !this.world) return;
    const el = this.stage.nativeElement;
    this.renderer.setSize(el.clientWidth, el.clientHeight, false);
    this.world.resize(el.clientWidth, el.clientHeight);
    this.anchors = Array.from(
      this.film.nativeElement.querySelectorAll<HTMLElement>('.film-chapter'),
    ).map(
      (chapter) =>
        chapter.offsetTop +
        (el.clientWidth < 760
          ? 0
          : (chapter.offsetHeight - el.clientHeight) / 2),
    );
    this.readScroll();
  };
  private preferenceChanged = () => {
    this.resize();
  };
  private visibility = () => {
    this.last = 0;
    this.wake();
  };
  private contextLost = () => {
    cancelAnimationFrame(this.frame);
    this.frame = 0;
    this.release();
    this.zone.run(() => {
      this.ready.set(false);
      this.unavailable.set(true);
    });
  };
  private wake() {
    if (
      !this.frame &&
      !this.destroyed &&
      this.renderer &&
      this.visible &&
      !document.hidden
    )
      this.frame = requestAnimationFrame(this.animate);
  }
  private animate = (now: number) => {
    this.frame = 0;
    if (
      this.destroyed ||
      !this.renderer ||
      !this.world ||
      !this.visible ||
      document.hidden
    ) {
      this.last = 0;
      return;
    }
    if (
      !this.reduced.matches &&
      this.last &&
      now - this.last < 1000 / (innerWidth < 760 ? 30 : 60)
    ) {
      this.wake();
      return;
    }
    const dt = Math.min((now - (this.last || now)) / 1000, 0.05);
    this.last = now;
    const reduced = this.reduced.matches;
    this.elapsed += reduced ? 0 : dt;
    const previous = this.progress;
    this.progress = reduced
      ? STORY_BEATS.reduce<number>(
          (best, beat) =>
            Math.abs(beat - this.target) < Math.abs(best - this.target)
              ? beat
              : best,
          STORY_BEATS[0],
        )
      : this.progress +
        (this.target - this.progress) * (1 - Math.exp(-dt * 4.8));
    if (
      !reduced ||
      this.dirty ||
      Math.abs(previous - this.progress) > 0.00001
    ) {
      this.world.update(this.progress, this.elapsed, reduced);
      this.renderer.render(this.world.scene, this.world.camera);
      this.dirty = false;
    }
    if (!reduced) this.wake();
  };
  private release() {
    this.world?.dispose();
    this.renderer?.dispose();
    this.world = undefined;
    this.renderer = undefined;
  }
  ngOnDestroy() {
    this.destroyed = true;
    cancelAnimationFrame(this.frame);
    this.observer?.disconnect();
    this.resizeObserver?.disconnect();
    this.cleanups.forEach((f) => f());
    this.release();
  }
}
