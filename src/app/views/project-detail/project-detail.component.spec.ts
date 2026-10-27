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
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toContain('Retail POS');
    expect(harness.routeNativeElement?.querySelector('.case-cover img')).toBeTruthy();
    expect(harness.routeNativeElement?.textContent).toContain('anonimizado');
    const darkTheme = harness.routeNativeElement?.querySelector<HTMLButtonElement>('.theme-choice button:last-child');
    expect(darkTheme).toBeTruthy();
    darkTheme?.click();
    harness.detectChanges();
    expect(harness.routeNativeElement?.querySelector('.pos-system img')?.getAttribute('src')).toContain('pos-dark.webp');
    const component = await harness.navigateByUrl('/projects/poketrade', ProjectDetailComponent);
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toContain('PokéTrade');
    expect(harness.routeNativeElement?.querySelector('.pos-system')).toBeNull();
    expect(harness.routeNativeElement?.querySelector('.poke-collection')).toBeTruthy();
    expect(harness.routeNativeElement?.querySelectorAll('.case-cover-phones img').length).toBe(3);
    component.openImage(4);
    harness.detectChanges();
    expect(component.imageDialog?.nativeElement.open).toBeTrue();
    component.onGalleryKey(new KeyboardEvent('keydown', { key: 'ArrowRight' }));
    expect(component.selectedImage).toBe(0);
    component.onGalleryKey(new KeyboardEvent('keydown', { key: 'ArrowLeft' }));
    expect(component.selectedImage).toBe(4);
    TestBed.inject(LocaleService).set('en');
    harness.detectChanges();
    expect(harness.routeNativeElement?.textContent).toContain('A conversation with trading context');
    component.imageDialog?.nativeElement.close();
    await harness.navigateByUrl('/projects/autotok-web', ProjectDetailComponent);
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toContain('AutoTok');
  });
});
