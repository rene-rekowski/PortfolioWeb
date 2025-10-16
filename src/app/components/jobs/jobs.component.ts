import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface JobItem {
	  period: string;
	  job: string;
	  institution: string;
	  description?: string;
	}

@Component({
  selector: 'app-jobs',
  imports: [CommonModule],
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
    },
    {
    	period: '2019 - 2022',
    	job: 'Erzieher',
    	institution: 'Grundschule Eberhofweg / Elbkinder',
    	description: 'Berufbegleitende Ausbildung. Teilzeit in Nachmittagsbetreung und Schulgebegleitung',
    },
    {
    	period: '2018 - 2019',
    	job: 'FSJ',
    	institution: 'IGL - Intressengemeinschaft Lentersweg',
    	description: 'Aushilfe während der Oberstufe',
    }
    
    
	];
}
