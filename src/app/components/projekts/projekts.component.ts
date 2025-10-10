import { Component } from '@angular/core';

interface Project {
	title: string;
	description: string;
	link?: string;
	image?: string;
}

@Component({
  selector: 'app-projekts',
  imports: [],
  templateUrl: './projekts.component.html',
  styleUrl: './projekts.component.css'
})
export class ProjektsComponent {
	projects: Project[] = [
		{
			title: 'Portfilo Webseite',
			de
		}
		];

}
