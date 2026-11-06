import { Component } from '@angular/core';
import { DEALERS } from '../../data/landing.data';

@Component({
  selector: 'app-dealers',
  templateUrl: './dealers.html',
  styleUrl: './dealers.css',
})
export class Dealers {
  dealers = DEALERS;

  phoneLink(phone: string): string {
    return 'tel:' + phone.replace(/\s/g, '');
  }
}
