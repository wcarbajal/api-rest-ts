import { Request, Response, Router } from "express";
import { getItem, getItems, updateItem, postItem, deleteItem } from '../controllers/item';


const router = Router();


router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', postItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);



export { router }