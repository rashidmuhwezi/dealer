export type BodyType = 'SUV' | 'Sedan' | 'Pickup' | 'Hatchback';

export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  bodyType: BodyType;
  mileageKm: number;
  fuel: string;
  transmission: string;
  priceUgx: number;
  tint: string; // placeholder colour until you add real photos
}

export interface Dealer {
  id: number;
  name: string;
  area: string;
  carsInStock: number;
  rating: number;
  hours: string;
  phone: string;
}

export interface VlogPost {
  id: number;
  title: string;
  summary: string;
  duration: string;
  published: string;
  url: string;
  tint: string;
}
