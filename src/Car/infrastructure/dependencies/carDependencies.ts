import { ViewEntity } from "../../application/useCases/viewEntity";
import { CarController } from "../controllers/carController";
import { MemoryCRepository } from "../memoryCRepository";

const memoryCRepository = new MemoryCRepository();
export const viewEntity = new ViewEntity(memoryCRepository);
export const carController = new CarController(viewEntity);
