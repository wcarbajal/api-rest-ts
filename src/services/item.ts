import { Car } from '../interfaces/car.interface';
import ItemMoldel from '../models/item';

const insertcar = async (item: Car) => {
  const responseInsert = await ItemMoldel.create(item);

  return responseInsert;
}

export {insertcar};