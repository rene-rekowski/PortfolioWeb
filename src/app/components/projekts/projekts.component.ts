import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
	title: string;
	description: string;
	link?: string;
	image?: string;
}

@Component({
  selector: 'app-projekts',
  imports: [CommonModule],
  templateUrl: './projekts.component.html',
  styleUrls: ['./projekts.component.css']
})
export class ProjektsComponent {
	projects: Project[] = [
		{
			title: 'Portfilo Website',
			description: 'Showcase for my Projekts',
			link: 'https://github.com/rene-rekowski/PortfolioWeb'
		},
		{
			title: 'MemoryCatcher',
			description: 'orgnaiz your Memorys',
			link: 'https://github.com/rene-rekowski/MemoryCatcher',
		},
		{
			title: 'LetsChat',
			description: 'Chat in with other in same Network',
			link: 'https://github.com/rene-rekowski/LetsChat',
		},
		];

}
