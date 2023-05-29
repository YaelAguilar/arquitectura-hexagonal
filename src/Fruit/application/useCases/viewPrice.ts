import { FruitRepository } from "../../domain/repositories/fruitRepository";

export class ViewPrice {
    constructor(private readonly fruitRepository: FruitRepository) {}
    async run(fruitId: string) {
        const fruit = await this.fruitRepository.getById(fruitId);
    
        if (!fruit) {
          throw new Error(`User id not found ${fruitId}`);
        }
        console.log("La fruta ", fruit.fruta,"tiene un precio de ",fruit.preciou ," la unidad");
      }

}