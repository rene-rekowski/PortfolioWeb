import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-hobbys',
  imports: [RevealOnScrollDirective],
  templateUrl: './hobbys.component.html',
  styleUrl: './hobbys.component.css'
})
export class HobbysComponent {

}
