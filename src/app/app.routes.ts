import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { ProjektsComponent } from './components/projekts/projekts.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';

export const routes: Routes = [
  { path: '', component: MainComponent }, // Standardroute
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjektsComponent },
  { path: 'projects/:title', component: ProjectDetailComponent },
  { path: 'education', component: EducationComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }, // fallback route
 
];
