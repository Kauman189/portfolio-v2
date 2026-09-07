import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([])],
      imports: [ContactComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('encodes the email draft without allowing query parameters in user text', () => {
    component.locale.set('en');
    component.name = 'Ana & Co';
    component.replyTo = 'ana@example.com';
    component.message = 'A poster? &cc=other@example.com';
    component.service = 'visual';
    const url = new URL(component.mailto);
    expect(url.pathname).toBe('camiloarias.frg@gmail.com');
    expect(url.searchParams.get('subject')).toBe('Project enquiry — Ana & Co');
    expect(url.searchParams.get('body')).toContain(component.message);
    expect(url.searchParams.has('cc')).toBeFalse();
  });

  it('does not mark an invalid form as ready to send', () => {
    const form = { invalid: true } as import('@angular/forms').NgForm;
    component.prepare(form);
    expect(component.prepared).toBeFalse();
    expect(component.submitted).toBeTrue();
  });

  it('changes language without losing an in-progress enquiry', () => {
    component.name = 'Ana';
    component.service = 'visual';
    component.message = 'Un proyecto editorial';
    component.locale.set('es');
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('label[for="enquiry-name"]')
        .textContent,
    ).toContain('Tu nombre');
    component.locale.set('en');
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('label[for="enquiry-name"]')
        .textContent,
    ).toContain('Your name');
    expect(component.name).toBe('Ana');
    expect(component.service).toBe('visual');
    expect(component.serviceLabel).toBe('Visual design');
    expect(component.message).toBe('Un proyecto editorial');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
