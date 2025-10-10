import { Routes } from '@angular/router';
import { ProjectShowcaseComponent } from './components/project-showcase/project-showcase.component'; 

export const routes: Routes = [
	{ path: '', component: ProjectShowcaseComponent }, // Standardroute
	 { path: 'project-showcase', component: ProjectShowcaseComponent }
];
