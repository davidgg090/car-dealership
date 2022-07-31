import { Car } from '../../cars/interfaces/car.interface';
import { v4 } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: v4(),
    brand: 'Toyota',
    model: 'Corolla',
  },
  {
    id: v4(),
    brand: 'Honda',
    model: 'Civic',
  },
  {
    id: v4(),
    brand: 'Nissan',
    model: 'Versa',
  },
];
