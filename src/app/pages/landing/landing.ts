import { Component } from '@angular/core';
import { Topnav } from '../../component/topnav/topnav';
import { Hero } from '../../component/hero/hero';
import { CarCards } from '../../component/car-cards/car-cards';
import { Dealers } from '../../component/dealers/dealers';
import { Vlog } from '../../component/vlog/vlog';

@Component({
  selector: 'app-landing',
  imports: [Topnav, Hero, CarCards, Dealers, Vlog],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {
  year = new Date().getFullYear();
}
