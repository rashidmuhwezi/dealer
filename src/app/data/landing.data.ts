import type { Car, Dealer, VlogPost } from '../models/car.model';

export const CARS: Car[] = [
  { id: 1, make: 'Toyota', model: 'RAV4', year: 2021, bodyType: 'SUV', mileageKm: 32000, fuel: 'Petrol', transmission: 'Automatic', priceUgx: 125000000, tint: '#1f6f78' },
  { id: 2, make: 'Toyota', model: 'Land Cruiser Prado', year: 2019, bodyType: 'SUV', mileageKm: 58000, fuel: 'Diesel', transmission: 'Automatic', priceUgx: 210000000, tint: '#2b4a7a' },
  { id: 3, make: 'Toyota', model: 'Hilux Double Cab', year: 2020, bodyType: 'Pickup', mileageKm: 47000, fuel: 'Diesel', transmission: 'Manual', priceUgx: 165000000, tint: '#4b5d3a' },
  { id: 4, make: 'Toyota', model: 'Premio', year: 2018, bodyType: 'Sedan', mileageKm: 71000, fuel: 'Petrol', transmission: 'Automatic', priceUgx: 52000000, tint: '#5a4a7a' },
  { id: 5, make: 'Honda', model: 'Fit', year: 2019, bodyType: 'Hatchback', mileageKm: 41000, fuel: 'Hybrid', transmission: 'Automatic', priceUgx: 38000000, tint: '#7a4a3a' },
  { id: 6, make: 'Mazda', model: 'CX-5', year: 2020, bodyType: 'SUV', mileageKm: 36000, fuel: 'Petrol', transmission: 'Automatic', priceUgx: 98000000, tint: '#3a6a5a' },
];

export const DEALERS: Dealer[] = [
  { id: 1, name: 'Kampala Motors Hub', area: 'Nakawa, Kampala', carsInStock: 48, rating: 4.8, hours: 'Mon–Sat, 8am–6pm', phone: '+256 700 000 001' },
  { id: 2, name: 'Lakeview Auto Centre', area: 'Entebbe Road', carsInStock: 31, rating: 4.6, hours: 'Mon–Sat, 8:30am–6pm', phone: '+256 700 000 002' },
  { id: 3, name: 'Ntinda Prime Cars', area: 'Ntinda, Kampala', carsInStock: 22, rating: 4.7, hours: 'Mon–Sun, 9am–5pm', phone: '+256 700 000 003' },
  { id: 4, name: 'Jinja Road Showroom', area: 'Jinja Road', carsInStock: 36, rating: 4.5, hours: 'Mon–Sat, 8am–6:30pm', phone: '+256 700 000 004' },
];

export const VLOGS: VlogPost[] = [
  { id: 1, title: 'What to check before you buy a used SUV', summary: 'A walk-around of the seven checks our mechanics do on every car before it reaches the showroom.', duration: '12:40', published: '28 Oct 2026', url: 'https://www.youtube.com', tint: '#1f6f78' },
  { id: 2, title: 'Petrol, diesel or hybrid: what suits Kampala traffic?', summary: 'Fuel costs and servicing compared for daily city driving.', duration: '8:15', published: '21 Oct 2026', url: 'https://www.youtube.com', tint: '#2b4a7a' },
  { id: 3, title: 'Importing a car: fees and paperwork explained', summary: 'From shipping to registration, step by step.', duration: '10:02', published: '14 Oct 2026', url: 'https://www.youtube.com', tint: '#5a4a7a' },
  { id: 4, title: 'Test drive tips for first-time buyers', summary: 'What to listen for, feel for and ask for.', duration: '6:48', published: '7 Oct 2026', url: 'https://www.youtube.com', tint: '#4b5d3a' },
];
