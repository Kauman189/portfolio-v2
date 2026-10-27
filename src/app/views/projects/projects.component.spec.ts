import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([])],
      imports: [ProjectsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows five selected cases and four archive projects in the intended order', () => {
    expect(component.projects.map((project) => project.slug)).toEqual([
      'digital-commerce',
      'operations-analytics',
      'fynaq',
      'poketrade',
      'altura',
    ]);
    expect(component.archive.map((project) => project.slug)).toEqual([
      'autotok-web',
      'autotok-dashboard',
      'autotok-poster',
      'acera-jku',
    ]);
  });
});
