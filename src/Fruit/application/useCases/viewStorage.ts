import { Fruit } from "../../domain/entities/fruit";
import { FruitRepository } from "../../domain/repositories/fruitRepository";

export class ViewStorage {
    constructor(private readonly fruitRepository: FruitRepository) {}

    async execute(): Promise<Fruit[] | null> {
        return this.fruitRepository.getStorage();
      }

}