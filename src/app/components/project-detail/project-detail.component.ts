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
  currentImageIndex = 0;
  projectImages: string[] = [];

  projects = [
    {
      title: 'MemoryCatcher',
      description: 'Organize and manage your personal memories with an intuitive interface.',
      features: ['Save and view memories with timestamps and categories',
                 'save person you know and add it in a event', 
               	],
      frameworks: ['Java', 'JavaFX','SGLite'],
      images: [
              'images/projects/memory-catcher-example/memory-catcher-example-1.png',
              'images/projects/memory-catcher-example/memory-catcher-example-2.png',
              'images/projects/memory-catcher-example/memory-catcher-example-3.png',
              'images/projects/memory-catcher-example/memory-catcher-example-4.png',
             ],
      link: 'https://github.com/rene-rekowski/MemoryCatcher'
    },
    {
      title: 'LetsChat',
      description: 'A local network chat application for seamless communication between multiple users.',
      features: ['Local network chat', 'Multi-user support'],
      frameworks: ['Java', 'Sockets', 'JavaFX'],
      images: [
              'images/projects/lets-chat-example/lets-chat-example-1.png',
              'images/projects/lets-chat-example/lets-chat-example-2.png',
              ],
      link: 'https://github.com/rene-rekowski/LetsChat'
    },
    {
        title: 'FXWriter',
        description: 'A text editor for creating, editing, and saving text files, with options to encode or compress them.',
        features: ['load/save txt-file', 
                   'text-splitt in pages', 
                   'Codierung/Compression of strings (Caeser, LZW)'
                   ],
        frameworks: ['Java', 'JavaFX'],
        images: [
                'images/projects/fx-writer-example/fx-writer-example-1.png',
                'images/projects/fx-writer-example/fx-writer-example-2.png',
                ],
        link: 'https://github.com/rene-rekowski/FXWriter'
      },
	{
		title: 'Portfilo Website',
		description: 'My portfolio website showcasing my projects and CV.',
		features: ['Responsive card-based project presentation', 
		           'Navigation through multiple routed pages'],
	    frameworks: ['JavaScript', 'Angular'],
	    images: ['images/projects/portfoilo-example.png'],
		link: 'https://github.com/rene-rekowski/PortfolioWeb',
		
	},
    
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
	    const title = this.route.snapshot.paramMap.get('title');
	    this.project = this.projects.find(p => p.title === title);
	    if (this.project && this.project.images) {
	      this.projectImages = this.project.images;
	      this.currentImageIndex = 0;
	    }
	  }

  goBack(): void {
    this.router.navigate(['/']);
  }
  
  prevImage(): void {
	    if (this.projectImages.length > 0) {
	      this.currentImageIndex =
	        (this.currentImageIndex - 1 + this.projectImages.length) % this.projectImages.length;
	    }
	  }

	  nextImage(): void {
	    if (this.projectImages.length > 0) {
	      this.currentImageIndex =
	        (this.currentImageIndex + 1) % this.projectImages.length;
	    }
	  }
}
