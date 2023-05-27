import express from "express";

import { ViewPrice } from "../../application/useCases/viewPrice";
import { ViewStorage } from "../../application/useCases/viewStorage";
import { FruitController } from "../controllers/fruitController";
import { MemoryFRepository } from "../memoryFRepository";

const fruitRouter = express.Router();
const fruitRepository = new MemoryFRepository();
const viewPrice = new ViewPrice(fruitRepository);
const viewStorage = new ViewStorage(fruitRepository);
const fruitController = new FruitController(viewPrice, viewStorage);

fruitRouter.post("/:id/price", fruitController.run.bind(fruitController));
fruitRouter.get("/storage", fruitController.getStorage);

export { fruitRouter };