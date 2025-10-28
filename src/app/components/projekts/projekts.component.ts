import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RevealOnScrollDirective } from '../directives/reveal-on-scroll.directive';

interface Project {
	title: string;
	description: string;
	link?: string;
	image?: string;
}

@Component({
  selector: 'app-projekts',
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './projekts.component.html',
  styleUrls: ['./projekts.component.css']
})

export class ProjektsComponent {
	projects: Project[] = [
		{
			title: 'MemoryCatcher',
			description: 'orgnaiz your Memorys',
			link: 'https://github.com/rene-rekowski/MemoryCatcher',
			image: 'images/projects/MemoryCatcherExample.png',
		},
		{
			title: 'LetsChat',
			description: 'Chat in with other in same Network',
			link: 'https://github.com/rene-rekowski/LetsChat',
			image: 'images/projects/LetsChatExample.png',
		},
		{
			title: 'FXWriter',
			description: 'Text-Program',
			link: 'https://github.com/rene-rekowski/FXWriter',
			image: 'images/projects/fxwriter-example.png'
		},
		{
			title: 'Portfilo Website',
			description: 'Showcase for my Projekts',
			link: 'https://github.com/rene-rekowski/PortfolioWeb',
			image: 'images/projects/portfoilo-example.png',
		},
	];
	
	openLink(url: string): void {
		  window.open(url, '_blank');
		}
	constructor(private router: Router) {}

	viewDetails(title: string) {
	  this.router.navigate(['/projects', title]);
	}

}


