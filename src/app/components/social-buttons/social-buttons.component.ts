import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-buttons.component.html',
  styleUrls: ['./social-buttons.component.css']
})
export class SocialButtonsComponent {
  socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/rene-rekowski',
      icon: 'images/icons/github-icon.png'
    },
    {
      name: 'Pinterest',
      url: 'https://de.pinterest.com/renerekowski0335/',
      icon: 'images/icons/pinterest-icon.png'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/dein_profilname',
      icon: 'images/icons/instagram-icon.png'
    }
  ];
}
