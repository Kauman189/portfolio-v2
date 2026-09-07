import { Routes } from '@angular/router';
import { MainInfoComponent } from './views/main-info/main-info.component';
export const routes: Routes = [
  {
    path: '',
    component: MainInfoComponent,
    title: 'Camilo Arias — UX/UI & Visual Designer',
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./views/projects/projects.component').then(
        (m) => m.ProjectsComponent,
      ),
    title: 'Selected Work — Camilo Arias',
  },
  {
    path: 'projects/autotok-landing',
    redirectTo: 'projects/autotok-web',
    pathMatch: 'full',
  },
  {
    path: 'projects/:slug',
    loadComponent: () =>
      import('./views/project-detail/project-detail.component').then(
        (m) => m.ProjectDetailComponent,
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./views/about/about.component').then((m) => m.AboutComponent),
    title: 'About — Camilo Arias',
  },
  {
    path: 'imagine',
    loadComponent: () =>
      import('./views/imagine/imagine.component').then(
        (m) => m.ImagineComponent,
      ),
    title: 'Imagine — Camilo Arias',
  },
  { path: 'inspiration', redirectTo: 'imagine', pathMatch: 'full' },
  { path: 'playground', redirectTo: 'imagine', pathMatch: 'full' },
  {
    path: 'contact',
    loadComponent: () =>
      import('./views/contact/contact.component').then(
        (m) => m.ContactComponent,
      ),
    title: 'Let’s Talk — Camilo Arias',
  },
  {
    path: 'legal/:page',
    loadComponent: () =>
      import('./views/legal/legal.component').then((m) => m.LegalComponent),
    title: 'Legal — Camilo Arias',
  },
  { path: '**', redirectTo: '' },
];
