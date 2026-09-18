import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { ProjectDetailComponent } from './project-detail.component';
import { LocaleService } from '../../i18n/locale.service';
import { CASE_STUDIES } from '../../data/case-studies';
import { SELECTED_PROJECTS } from '../../data/projects';
describe('Case-study navigation', () => {
  it('provides the complete bilingual story for every selected case', () => {
    const fields = ['team', 'constraints', 'owned', 'keyDecisions', 'flowDetail', 'iterations', 'designSystem', 'implementation', 'shipped', 'outcome', 'reflection'] as const;
    for (const project of SELECTED_PROJECTS) {
      const study = CASE_STUDIES[project.slug];
      for (const field of fields) {
        expect(study[field]?.[0]?.trim()).withContext(`${project.slug}: ${field} ES`).toBeTruthy();
        expect(study[field]?.[1]?.trim()).withContext(`${project.slug}: ${field} EN`).toBeTruthy();
      }
    }
  });
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
    await harness.navigateByUrl('/projects/digital-commerce', ProjectDetailComponent);
    expect(
      harness.routeNativeElement?.querySelector('h1')?.textContent,
    ).toContain('Plataforma de comercio digital');
    expect(harness.routeNativeElement?.querySelector('.case-cover')).toBeNull();
    expect(harness.routeNativeElement?.textContent).toContain('conversación privada');
    await harness.navigateByUrl('/projects/its-time', ProjectDetailComponent);
    expect(
      harness.routeNativeElement?.querySelector('h1')?.textContent,
    ).toContain('ITS Time');
    expect(harness.routeNativeElement?.textContent).toContain('hojas de Excel');
    expect(harness.routeNativeElement?.textContent).not.toContain('Resultado aún no medido');
    TestBed.inject(LocaleService).set('en');
    harness.detectChanges();
    expect(harness.routeNativeElement?.textContent).toContain('paid leave');
    await harness.navigateByUrl('/projects/autotok-web', ProjectDetailComponent);
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toContain('AutoTok');
  });
});
