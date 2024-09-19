import { Schema, Types, model, Model } from "mongoose";
import { Car } from '../interfaces/car.interface';

const ItemSchema = new Schema<Car>( 
  {
    color: { type: String },
    gas: { type: String, enum: ['gasoline', 'diesel'] },
    year: { type: Number },
    description: { type: String },
    price: { type: Number},
  },
  {
    timestamps: true,
    versionKey: false,
  }
)


const ItemMoldel = model('item', ItemSchema)
export default ItemMoldel;