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
  imports: [RouterLink],
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
  readonly chapters: { title: Bilingual; text: Bilingual; note: Bilingual }[] =
    [
      {
        title: ['Un buen rincón.', 'A good little spot.'],
        text: [
          'Milo tenía una hoja, sol por la mañana y absolutamente ningún plan. Le iba bastante bien.',
          'Milo had a leaf, morning sunshine and absolutely no plans. Things were going pretty well.',
        ],
        note: ['08:02 / La vida en una hoja', '08:02 / Life on a leaf'],
      },
      {
        title: ['Una onda distinta.', 'A different ripple.'],
        text: [
          'Hasta que algo se movió al otro lado. June también buscaba un sitio donde no hacer gran cosa.',
          'Then something moved on the other side. June was also looking for somewhere to do very little.',
        ],
        note: ['08:07 / Alguien llega', '08:07 / Someone arrives'],
      },
      {
        title: ['Hola.\nCreo.', 'Hello.\nI think.'],
        text: [
          'Una pata en el aire. Una mirada hacia atrás. Sí, el saludo era para él.',
          'A little wave. A glance behind. Yes, the hello was meant for him.',
        ],
        note: ['08:09 / Primer contacto', '08:09 / First contact'],
      },
      {
        title: ['Parecía\nun salto fácil.', 'It looked like\nan easy jump.'],
        text: [
          'La distancia estaba calculada. La confianza, un poco por encima de lo recomendable.',
          'The distance was calculated. The confidence was a little higher than advisable.',
        ],
        note: ['08:10 / Un pequeño impulso', '08:10 / A little courage'],
      },
      {
        title: ['Casi.', 'Almost.'],
        text: [
          'El aterrizaje tuvo sus matices. Por suerte, June se rio con él.',
          'The landing had its subtleties. Fortunately, June laughed with him.',
        ],
        note: ['08:10 / Plaf.', '08:10 / Splash.'],
      },
      {
        title: ['No era\ngran cosa.', 'It wasn’t\na big thing.'],
        text: [
          'Solo una flor que había encontrado cerca. June hizo espacio para guardarla.',
          'Just a flower he had found nearby. June made a little room to keep it.',
        ],
        note: [
          '09:24 / Una pequeña atención',
          '09:24 / A little thoughtfulness',
        ],
      },
      {
        title: ['Un poco\nmás cerca.', 'A little\ncloser.'],
        text: [
          'Hablaron de mosquitos, de hojas y de nada en particular. Las pausas también estaban bien.',
          'They talked about mosquitoes, leaves and nothing in particular. The pauses were nice, too.',
        ],
        note: [
          '12:16 / Sin llenar el silencio',
          '12:16 / No need to fill the silence',
        ],
      },
      {
        title: ['Y entonces,\nllovió.', 'And then,\nit rained.'],
        text: [
          'Ninguna de las dos ranas había mirado el tiempo. Una hoja grande resolvió lo importante.',
          'Neither frog had checked the weather. One big leaf took care of what mattered.',
        ],
        note: ['16:03 / Sitio para dos', '16:03 / Room for two'],
      },
      {
        title: ['Después\ndel ruido.', 'After\nthe noise.'],
        text: [
          'El estanque olía distinto. Salieron las primeras luces y se quedaron un rato mirando.',
          'The pond smelled different. The first little lights appeared, and they stayed to watch.',
        ],
        note: ['19:48 / Baja la luz', '19:48 / The light changes'],
      },
      {
        title: ['El mismo\nritmo.', 'The same\nrhythm.'],
        text: [
          'Esta vez se movieron a la vez. No especialmente bien. Pero a la vez.',
          'This time they moved together. Not particularly well. But together.',
        ],
        note: ['20:12 / Dos pasos torpes', '20:12 / Two awkward steps'],
      },
      {
        title: ['Ah.\nEra esto.', 'Oh.\nSo this was it.'],
        text: [
          'Milo dejó de pensar en qué decir después. June ya no estaba buscando otra hoja.',
          'Milo stopped thinking about what to say next. June wasn’t looking for another leaf anymore.',
        ],
        note: ['21:06 / Sin mucho que explicar', '21:06 / Not much to explain'],
      },
      {
        title: ['Se quedaron.', 'They stayed.'],
        text: [
          'El mismo estanque. La misma hoja. Y un buen motivo para volver mañana.',
          'The same pond. The same leaf. And a good reason to come back tomorrow.',
        ],
        note: [
          'Un día después / Continuará',
          'One day later / To be continued',
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
    this.dirty = true;
    this.wake();
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
