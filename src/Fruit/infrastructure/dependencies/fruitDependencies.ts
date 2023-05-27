import { ViewPrice } from "../../application/useCases/viewPrice";
import { ViewStorage } from "../../application/useCases/viewStorage";
import { FruitController } from "../controllers/fruitController";
import { MemoryFRepository } from "../memoryFRepository";

const memoryFRepository = new MemoryFRepository();
export const viewPrice = new ViewPrice(memoryFRepository);
export const viewStorage = new ViewStorage(memoryFRepository);
export const fruitController = new FruitController(viewPrice, viewStorage);
