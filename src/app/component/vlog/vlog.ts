import { Component } from '@angular/core';
import { VLOGS } from '../../data/landing.data';

@Component({
  selector: 'app-vlog',
  templateUrl: './vlog.html',
  styleUrl: './vlog.css',
})
export class Vlog {
  featured = VLOGS[0];
  others = VLOGS.slice(1);
}
