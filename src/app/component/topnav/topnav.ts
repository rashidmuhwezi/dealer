import { Component } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.html',
  styleUrl: './topnav.css',
})
export class Topnav {
  links = [
    { label: 'Showrooms', href: '#dealers' },
    { label: 'SignUp', href: '#signup' },
    { label: 'Login', href: '#login' },
    { label: 'About', href: '#about' },
    { label: 'Contact Us', href: '#contact' },
  ];
}
