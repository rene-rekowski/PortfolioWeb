import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface EducationItem {
  period: string;
  title: string;
  institution: string;
  description?: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  education: EducationItem[] = [
    {
      period: '2022 - heute',
      title: 'Bachelor of Science – Informatik Technischer Systeme',
      institution: 'HAW Hamburg',
      description: 'Schwerpunkt auf Softwareentwicklung und eingebettete Systeme.'
    },
    {
      period: '2019 - 2022',
      title: 'Staatlich anerkannter Erzieher',
      institution: 'Fröbelseminar Hamburg',
      description: 'Berufsbegleitende Ausbildung in der Nachmittagsbetreuung und Schulbegleitung.'
    }
  ];
}
