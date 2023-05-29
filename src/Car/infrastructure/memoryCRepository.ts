import pool from "../../db";
import { Car } from "../domain/entities/car";
import { CarRepository } from "../domain/repositories/carRepository";

export class MemoryCRepository implements CarRepository {

    async getById(carId: string): Promise<Car | null> {
        const [rows] = await pool.query(
            "SELECT id, marca FROM cars WHERE id = ?",
            [carId]
          );
          if (!Array.isArray(rows) || rows.length === 0) {
            return null;
          }
          const { id, marca } = rows[0] as {
            id: string;
            marca: string;
          };
          return new Car(id, marca);
    }
    


    
}