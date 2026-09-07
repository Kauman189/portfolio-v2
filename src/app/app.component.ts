import {
  Component,
  inject,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  effect,
  signal,
} from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MotionService } from './services/motion.service';
import { LocaleService } from './i18n/locale.service';
import { PROJECTS } from './data/projects';
import { CASE_STUDIES } from './data/case-studies';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit, OnDestroy {
  private el: ElementRef<HTMLElement> = inject(ElementRef);
  private motion = inject(MotionService);
  private locale = inject(LocaleService);
  private frame = 0;
  private currentPath = signal(inject(Router).url);
  constructor() {
    const meta = inject(Meta),
      title = inject(Title);
    effect(() => {
      const url = this.currentPath().split('?')[0];
      const page = url.split('/')[1];
      const project = PROJECTS.find((p) => url === '/projects/' + p.slug);
      const names: Record<string, string> = {
        projects: this.locale.t('Proyectos', 'Work'),
        about: this.locale.t('Sobre mí', 'About'),
        imagine: 'Imagine',
        contact: this.locale.t('Contacto', 'Contact'),
        legal: this.locale.t('Información legal', 'Legal'),
      };
      const heading = project
        ? this.locale.t(project.shortTitleEs, project.shortTitle)
        : (names[page] ??
          this.locale.t('Diseñador UX/UI y visual', 'UX/UI & visual designer'));
      title.setTitle(`${heading} — Camilo Arias`);
      const description = project
        ? this.locale.l(CASE_STUDIES[project.slug].overview)
        : this.locale.t(
            'Camilo Arias, diseñador UX/UI y visual en Valencia. Proyectos de producto, interfaces y diseño editorial.',
            'Camilo Arias, UX/UI and visual designer in Valencia. Product, interface and print design projects.',
          );
      meta.updateTag({ name: 'description', content: description });
      meta.updateTag({
        property: 'og:title',
        content: `${heading} — Camilo Arias`,
      });
      meta.updateTag({ property: 'og:description', content: description });
      meta.updateTag({
        name: 'twitter:title',
        content: `${heading} — Camilo Arias`,
      });
      meta.updateTag({ name: 'twitter:description', content: description });
      const canonical = `https://kauman189.com${url.split('#')[0] || '/'}`;
      document
        .querySelector<HTMLLinkElement>('link[rel="canonical"]')
        ?.setAttribute('href', canonical);
      meta.updateTag({ property: 'og:url', content: canonical });
      meta.updateTag({
        property: 'og:locale',
        content: this.locale.language() === 'es' ? 'es_ES' : 'en_US',
      });
      this.translateCookies();
    });
    inject(Router)
      .events.pipe(takeUntilDestroyed())
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.currentPath.set(event.urlAfterRedirects);
          cancelAnimationFrame(this.frame);
          this.frame = requestAnimationFrame(() => {
            this.motion.observe(this.el.nativeElement);
            this.el.nativeElement
              .querySelector<HTMLElement>('main')
              ?.focus({ preventScroll: true });
          });
        }
      });
  }
  private translateCookies() {
    const banner = document.querySelector('.cookie-banner');
    const message = banner?.querySelector('span');
    if (message)
      message.textContent = this.locale.t(
        'Este sitio utiliza cookies de Google Analytics para comprender las visitas.',
        'This site uses Google Analytics cookies to understand visits.',
      );
    const accept = banner?.querySelector('.cookie-btn-accept'),
      reject = banner?.querySelector('.cookie-btn-reject');
    if (accept) accept.textContent = this.locale.t('Aceptar', 'Accept');
    if (reject) reject.textContent = this.locale.t('Rechazar', 'Reject');
  }
  ngAfterViewInit() {
    this.motion.observe(this.el.nativeElement);
  }
  ngOnDestroy() {
    cancelAnimationFrame(this.frame);
    this.motion.destroy();
  }
}
