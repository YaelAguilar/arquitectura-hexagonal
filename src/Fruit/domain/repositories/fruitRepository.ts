import { Fruit } from "../entities/fruit";
export interface FruitRepository {
    getById(fruitId: string): Promise<Fruit | null>;
    getStorage(): Promise<Fruit[]>;
}