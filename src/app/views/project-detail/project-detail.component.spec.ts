import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { ProjectDetailComponent } from './project-detail.component';
import { LocaleService } from '../../i18n/locale.service';
describe('Case-study navigation', () => {
  it('updates the case when moving between projects on the same route', async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideRouter([
          { path: 'projects/:slug', component: ProjectDetailComponent },
        ]),
      ],
    }).compileComponents();
    TestBed.inject(LocaleService).set('es');
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/projects/altura', ProjectDetailComponent);
    expect(
      harness.routeNativeElement?.querySelector('h1')?.textContent,
    ).toContain('Altura');
    await harness.navigateByUrl('/projects/its-time', ProjectDetailComponent);
    expect(
      harness.routeNativeElement?.querySelector('h1')?.textContent,
    ).toContain('ITS Time');
    expect(harness.routeNativeElement?.textContent).toContain(
      'Registros sin correcciones',
    );
    TestBed.inject(LocaleService).set('en');
    harness.detectChanges();
    expect(harness.routeNativeElement?.textContent).toContain(
      'Entries without corrections',
    );
  });
});
