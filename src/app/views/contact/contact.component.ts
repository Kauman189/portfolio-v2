import { IconComponent } from '../../components/icon/icon.component';
import { Localized } from '../../i18n/locale.service';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LivingMarkComponent } from '../../components/living-mark/living-mark.component';
import { ElementRef } from '@angular/core';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [IconComponent, FormsModule, LivingMarkComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent extends Localized {
  email = 'camiloarias.frg@gmail.com';
  name = '';
  replyTo = '';
  service = '';
  message = '';
  submitted = false;
  prepared = false;
  private copied: 'idle' | 'success' | 'fallback' = 'idle';
  get copyState() {
    if (this.copied === 'success')
      return this.t('Mensaje copiado.', 'Message copied.');
    if (this.copied === 'fallback')
      return this.t(
        'Selecciona y copia el mensaje de abajo.',
        'Select and copy the message below.',
      );
    return '';
  }
  private element: ElementRef<HTMLElement> = inject(ElementRef);
  links = [
    {
      label: 'LinkedIn',
      note: [
        'Empezamos una conversación',
        'Let’s start a conversation',
      ] as const,
      url: 'https://www.linkedin.com/in/camilo-arias189/',
    },
    {
      label: 'Behance',
      note: ['Más de mi trabajo de diseño', 'More of my design work'] as const,
      url: 'https://www.behance.net/camiloariasg',
    },
    {
      label: 'Instagram',
      note: [
        'Un poco más allá del trabajo',
        'A little beyond the work',
      ] as const,
      url: 'https://www.instagram.com/kauman189/',
    },
    {
      label: 'GitHub',
      note: ['La parte técnica', 'The technical side'] as const,
      url: 'https://github.com/Kauman189',
    },
  ];
  readonly serviceOptions = [
    { id: 'ux', name: ['Diseño UX/UI', 'UX/UI design'] as const },
    { id: 'visual', name: ['Diseño visual', 'Visual design'] as const },
    {
      id: 'development',
      name: ['Desarrollo creativo', 'Creative development'] as const,
    },
    { id: 'other', name: ['Otra idea', 'Something else'] as const },
  ];
  get serviceLabel() {
    const option = this.serviceOptions.find(
      (option) => option.id === this.service,
    );
    return option ? this.l(option.name) : this.service;
  }
  get draft() {
    return `${this.t('Hola Camilo,', 'Hi Camilo,')}\n\n${this.message.trim()}\n\n${this.t('Nombre', 'Name')}: ${this.name.trim()}\n${this.t('Responder a', 'Reply to')}: ${this.replyTo.trim()}\n${this.t('Me interesa', 'Interested in')}: ${this.serviceLabel || this.t('Lo hablamos', 'Let’s discuss')}\n`;
  }
  get mailto() {
    return `mailto:${this.email}?subject=${encodeURIComponent(this.t('Consulta de proyecto — ', 'Project enquiry — ') + this.name.trim())}&body=${encodeURIComponent(this.draft)}`;
  }
  prepare(form: NgForm) {
    this.submitted = true;
    if (form.invalid || !this.name.trim() || !this.message.trim()) {
      this.element.nativeElement
        .querySelector<HTMLElement>(
          !this.name.trim()
            ? '#enquiry-name'
            : !this.message.trim()
              ? '#enquiry-message'
              : '.ng-invalid:not(form)',
        )
        ?.focus();
      return;
    }
    this.prepared = true;
    window.location.href = this.mailto;
  }
  async copyDraft() {
    try {
      await navigator.clipboard.writeText(this.draft);
      this.copied = 'success';
    } catch {
      this.copied = 'fallback';
    }
  }
}
