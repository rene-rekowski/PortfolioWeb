import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../directives/reveal-on-scroll.directive';

interface JobItem {
	  period: string;
	  job: string;
	  institution: string;
	  description?: string;
	  image: string;
	  reference: string;
	}

@Component({
  selector: 'app-jobs',
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {
	job: JobItem[] = [
    {
    	period: '2024 - 2025',
    	job: 'Datenerfasser',
    	institution: 'Signal Indua',
    	description: 'Teilzeit-Werkstudentenjob, Erfassung von Patienten Akten',
    	image: '/images/institution/signal-iduna.png',
    	reference: '/pdf/job-reference/arbeitszeugniss-signal-iduna.pdf',
    },
    {
    	period: '2019 - 2022',
    	job: 'Erzieher',
    	institution: 'Grundschule Eberhofweg / Elbkinder',
    	description: 'Berufbegleitende Ausbildung. Teilzeit in Nachmittagsbetreung und Schulgebegleitung',
    	image: '/images/institution/eberhof.png',
    	reference: '/pdf/job-reference/arbeitszeugniss-elbkinder.pdf',
    },
    {
    	period: '2018 - 2019',
    	job: 'FSJ',
    	institution: 'IGL - Intressengemeinschaft Lentersweg',
    	description: 'Jugendhausarbeit',
    	image: '/images/institution/igl.png',
    	reference: '/pdf/job-reference/arbeitszeugniss-igl.pdf',
    }
    
    
	];
	  openPDF(pdfPath: string): void {
		  window.open(pdfPath, '_blank');
		}
}
