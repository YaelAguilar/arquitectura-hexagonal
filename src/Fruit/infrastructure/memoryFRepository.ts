import pool from "../../db";
import { Fruit } from "../domain/entities/fruit";
import { FruitRepository } from "../domain/repositories/fruitRepository";

export class MemoryFRepository implements FruitRepository {
    async getStorage(): Promise<Fruit[]> {
      const [rows] = await pool.query(
        "SELECT id, fruta, cantidad, preciou FROM fruits"
        );
      const fruits: Fruit[] = Array.isArray(rows)
        ? rows.map((row: unknown) => {
            const { id, fruta, cantidad, preciou } = row as {
              id: string;
              fruta: string;
              cantidad: string;
              preciou: string;
            };
            return new Fruit(id, fruta, cantidad, preciou);
          })
        : [];
      return fruits;
    }

    async getById(fruitId: string): Promise<Fruit | null> {
        const [rows] = await pool.query(
            "SELECT id, fruta, cantidad, preciou FROM fruits WHERE id = ?",
            [fruitId]
          );
          if (!Array.isArray(rows) || rows.length === 0) {
            return null;
          }
          const { id, fruta, cantidad, preciou } = rows[0] as {
            id: string;
            fruta: string;
            cantidad: string;
            preciou: string;
          };
          return new Fruit(id, fruta, cantidad, preciou);
    }
    


    
}