import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface EducationItem {
  period: string;
  title: string;
  institution: string;
  description?: string;
  image: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
	 hoveredImage: string | null = null;
  education: EducationItem[] = [
    {
      period: '2022 - 2025',
      title: 'Bachelor of Science – Informatik Technischer Systeme',
      institution: 'HAW - Hochschule für angewandte Wissenschaften Hamburg',
      description: 'Schwerpunkt auf Softwareentwicklung und eingebettete Systeme.',
      image: '/images/institution/haw.png',
    },
    {
      period: '2019 - 2022',
      title: 'Staatlich anerkannter Erzieher',
      institution: 'BS30 - Fröbelseminar Hamburg',
      description: 'Berufsbegleitende Ausbildung in der Nachmittagsbetreuung und Schulbegleitung.',
      image: '/images/institution/bs30.png',
    },
    {
	  period: '2003 - 2027',
	  title: 'Irena-Sendler-Schule',
	  institution: 'Stadtteilschule',
	  description: 'allgemeine Fachhochschulreife',
	  image: '/images/institution/irena-sendler-schule.png',
    },
  ];
}
