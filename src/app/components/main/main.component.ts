import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AboutComponent } from '../about/about.component';
import { ProjektsComponent } from '../projekts/projekts.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, AboutComponent, ProjektsComponent, ContactComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
