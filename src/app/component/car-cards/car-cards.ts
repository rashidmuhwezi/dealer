import { Component, computed, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { BodyType } from '../../models/car.model';
import { CARS } from '../../data/landing.data';

type Filter = 'All' | BodyType;

@Component({
  selector: 'app-car-cards',
  imports: [DecimalPipe],
  templateUrl: './car-cards.html',
  styleUrl: './car-cards.css',
})
export class CarCards {
  filters: Filter[] = ['All', 'SUV', 'Sedan', 'Pickup', 'Hatchback'];
  selected = signal<Filter>('All');

  visibleCars = computed(() =>
    this.selected() === 'All'
      ? CARS
      : CARS.filter((car) => car.bodyType === this.selected())
  );
}
