import { IconComponent } from '../../components/icon/icon.component';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Localized } from '../../i18n/locale.service';
const POLICIES_EN: Record<string, { title: string; body: string }> = {
  terms: {
    title: 'Terms and Conditions',
    body: '<h6>1. Free Use</h6>\n        <p>This portfolio is freely accessible and can be used as a reference as long as the source is mentioned.</p>\n        \n        <h6>2. Content Ownership</h6>\n        <p>All code, design, and structure belong to the creator, but icons and other visual resources are property of third parties and no rights are claimed over them.</p>\n        \n        <h6>3. Limitation of Liability</h6>\n        <p>No guarantee or responsibility is provided for the use of the content on this site. It is provided as is, without warranties of any kind.</p>\n        \n        <h6>4. Reuse</h6>\n        <p>Reuse of code and design for educational or inspirational purposes is allowed, but you must give credit to the author.</p>',
  },
  privacy: {
    title: 'Privacy Policy',
    body: '<h6>1. Limited Data Collection</h6>\n        <p>This site uses basic Google Analytics cookies to understand visitor access patterns and site usage.</p>\n        \n        <h6>2. Information Usage</h6>\n        <p>The analytics data is only used to improve the site experience and understand visitor demographics. Your data is not sold to third parties.</p>\n        \n        <h6>3. Data Protection</h6>\n        <p>The limited information collected through Google Analytics is not permanently stored or shared with other entities. Your privacy is respected.</p>\n        \n        <h6>4. User Rights</h6>\n        <p>Users can disable cookies through their browser settings if they prefer not to have their basic usage data collected for analytics purposes.</p>',
  },
  cookies: {
    title: 'Cookies Policy',
    body: "<h6>1. Google Analytics Cookies</h6>\n        <p>This site uses Google Analytics cookies to understand how visitors interact with the website, improve user experience, and analyze traffic patterns.</p>\n        \n        <h6>2. Third-Party Resources</h6>\n        <p>Visual resources like icons and fonts may be sourced from third parties and are subject to their respective privacy policies.</p>\n        \n        <h6>3. Cookie Control</h6>\n        <p>You can manage or disable cookies through your browser settings. To learn more about controlling Google Analytics tracking, visit Google's Privacy & Terms page.</p>\n        \n        <h6>4. Data Usage</h6>\n        <p>Analytics data is anonymized and used solely for website improvement. No personally identifiable information is collected through these cookies.</p>",
  },
};
const POLICIES_ES: Record<string, { title: string; body: string }> = {
  terms: {
    title: 'Términos y condiciones',
    body: '<h6>1. Uso libre</h6><p>Este portfolio es de acceso libre y puede utilizarse como referencia siempre que se mencione la fuente.</p><h6>2. Propiedad del contenido</h6><p>El código, diseño y estructura pertenecen a su creador. Los iconos y otros recursos visuales de terceros pertenecen a sus respectivos autores; no se reclaman derechos sobre ellos.</p><h6>3. Limitación de responsabilidad</h6><p>El contenido se proporciona tal cual, sin garantías ni responsabilidad por el uso que se haga de él.</p><h6>4. Reutilización</h6><p>Se permite reutilizar el código y diseño con fines educativos o de inspiración, dando crédito al autor.</p>',
  },
  privacy: {
    title: 'Política de privacidad',
    body: '<h6>1. Recogida limitada de datos</h6><p>Este sitio utiliza cookies básicas de Google Analytics para comprender las visitas y el uso de la web.</p><h6>2. Uso de la información</h6><p>Los datos analíticos se utilizan únicamente para mejorar la experiencia y comprender a los visitantes. Los datos no se venden a terceros.</p><h6>3. Protección de datos</h6><p>La información limitada obtenida mediante Google Analytics no se almacena permanentemente ni se comparte con otras entidades.</p><h6>4. Derechos del usuario</h6><p>Puedes desactivar las cookies en la configuración de tu navegador si no deseas permitir el seguimiento analítico.</p>',
  },
  cookies: {
    title: 'Política de cookies',
    body: '<h6>1. Cookies de Google Analytics</h6><p>Las cookies analíticas permiten comprender la interacción con el sitio, mejorar la experiencia y analizar las visitas.</p><h6>2. Recursos de terceros</h6><p>Las fuentes, iconos y otros recursos visuales pueden proceder de terceros y están sujetos a sus respectivas políticas de privacidad.</p><h6>3. Control de cookies</h6><p>Puedes gestionar o desactivar las cookies desde el navegador. Para conocer el funcionamiento de Google Analytics, consulta la información de privacidad de Google.</p><h6>4. Uso de los datos</h6><p>Los datos analíticos son anónimos y se destinan exclusivamente a mejorar el sitio.</p>',
  },
};
@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [IconComponent, RouterLink],
  template: `<article class="page legal-page page-enter">
    <a class="eyebrow" routerLink="/"
      ><app-icon name="left" /> {{ t('Volver al inicio', 'Back home') }}</a
    >
    <h1 class="display-title">{{ policy.title }}</h1>
    <div class="legal-copy" [innerHTML]="policy.body"></div>
  </article>`,
  styles: [
    `
      .legal-page {
        max-width: 1100px;
        margin: auto;
      }
      .display-title {
        font-size: clamp(42px, 7vw, 100px);
      }
      @media (max-width: 759px) {
        .legal-page {
          max-width: 560px;
        }
        .display-title {
          font-size: 32px;
          margin-top: 28px;
        }
        :host ::ng-deep .legal-copy h6 {
          font-size: 18px !important;
        }
        :host ::ng-deep .legal-copy p {
          font-size: 13px !important;
          line-height: 1.85 !important;
        }
      }
      :host ::ng-deep .legal-copy h6 {
        font-size: 22px;
        margin: 35px 0 15px;
      }
      :host ::ng-deep .legal-copy p {
        font-size: 17px;
        color: var(--muted);
        line-height: 1.8;
      }
    `,
  ],
})
export class LegalComponent extends Localized {
  page = 'terms';
  get policy() {
    return (this.locale.language() === 'es' ? POLICIES_ES : POLICIES_EN)[
      this.page
    ];
  }
  constructor() {
    super();
    inject(ActivatedRoute)
      .paramMap.pipe(takeUntilDestroyed())
      .subscribe((params) => {
        const page = params.get('page') ?? 'terms';
        this.page = POLICIES_EN[page] ? page : 'terms';
      });
  }
}
