import express from "express";

import { ViewEntity } from "../../application/useCases/viewEntity";
import { CarController } from "../controllers/carController";
import { MemoryCRepository } from "../memoryCRepository";

const carRouter = express.Router();
const carRepository = new MemoryCRepository();
const viewEntity = new ViewEntity(carRepository);
const carController = new CarController(viewEntity);

carRouter.get("/:id/car", carController.run.bind(carController));

export { carRouter };