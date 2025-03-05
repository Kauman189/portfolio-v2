import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainInfoComponent } from './views/main-info/main-info.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { ContactComponent } from './views/contact/contact.component';

export const routes: Routes = [
    {path: '', redirectTo: 'main-info', pathMatch: 'full'},
    {path: 'nav', component: HeaderComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'main-info', component: MainInfoComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', redirectTo: 'main-info'}
];
