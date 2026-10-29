import { Injectable, inject, signal } from '@angular/core';
export type Bilingual = readonly [string, string];
@Injectable({ providedIn: 'root' })
export class LocaleService {
  readonly language = signal<'es' | 'en'>(this.savedLanguage());
  private savedLanguage(): 'es' | 'en' {
    try {
      return localStorage.getItem('k189-language') === 'en' ? 'en' : 'es';
    } catch {
      return 'es';
    }
  }
  constructor() {
    document.documentElement.lang = this.language();
  }
  t(es: string, en: string): string {
    return this.language() === 'es' ? es : en;
  }
  l(text: Bilingual): string {
    return text[this.language() === 'es' ? 0 : 1];
  }
  set(language: 'es' | 'en') {
    this.language.set(language);
    document.documentElement.lang = language;
    try {
      localStorage.setItem('k189-language', language);
    } catch {}
    window.dispatchEvent(new Event('k189-language'));
  }
}
export abstract class Localized {
  readonly locale = inject(LocaleService);
  get cvUrl() {
    return '/assets/pdf/cv-3.pdf';
  }
  t = (es: string, en: string) => this.locale.t(es, en);
  l = (text: Bilingual) => this.locale.l(text);
}
