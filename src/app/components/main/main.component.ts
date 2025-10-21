import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AboutComponent } from '../about/about.component';
import { ProjektsComponent } from '../projekts/projekts.component';
import { ContactComponent } from '../contact/contact.component';
import { EducationComponent } from '../education/education.component';
import { JobsComponent } from '../jobs/jobs.component';
import { HobbysComponent } from '../hobbys/hobbys.component';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, AboutComponent, ProjektsComponent,
            ContactComponent, EducationComponent, JobsComponent, HobbysComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
