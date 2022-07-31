import { v4 } from 'uuid';
import { Brand } from '../../brands/entities/brand.entity';

export const BRANDS_SEED: Brand[] = [
  {
    id: v4(),
    name: 'Toyota',
    createdAt: new Date().getTime(),
  },
  {
    id: v4(),
    name: 'Honda',
    createdAt: new Date().getTime(),
  },
  {
    id: v4(),
    name: 'Nissan',
    createdAt: new Date().getTime(),
  },
];
