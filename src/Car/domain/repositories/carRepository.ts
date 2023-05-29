import { Car } from "../entities/car";
export interface CarRepository {
    getById(CarId: string): Promise<Car | null>;
}