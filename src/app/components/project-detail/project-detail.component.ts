import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})

export class ProjectDetailComponent implements OnInit {
  project: any;

  projects = [
    {
      title: 'MemoryCatcher',
      description: 'Organize your memories',
      features: ['Save and view memories', 'Categorize entries', 'Simple UI'],
      frameworks: ['Java', 'JavaFX','SGLite'],
      image: 'images/projects/MemoryCatcherExample.png',
      link: 'https://github.com/rene-rekowski/MemoryCatcher'
    },
    {
      title: 'LetsChat',
      description: 'Chat with others in the same network',
      features: ['Local network chat', 'Multi-user support'],
      frameworks: ['Java', 'Sockets', 'JavaFX'],
      image: 'images/projects/LetsChatExample.png',
      link: 'https://github.com/rene-rekowski/LetsChat'
    },
    {
        title: 'FXWriter',
        description: 'Text editor',
        features: ['load/save txt-file', 'text-splitt in pages', 'Codierung/Compression of strings'],
        frameworks: ['Java', 'JavaFX'],
        image: 'images/projects/fxwriter-example.png',
        link: 'https://github.com/rene-rekowski/FXWriter'
      },
	{
		title: 'Portfilo Website',
		description: 'Showcase for my Projekts',
		features: ['Card presention', 'routing pages'],
	    frameworks: ['JavaScript', 'Angular'],
		link: 'https://github.com/rene-rekowski/PortfolioWeb',
		image: 'images/projects/portfoilo-example.png',
	},
    
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title');
    this.project = this.projects.find(p => p.title === title);
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
