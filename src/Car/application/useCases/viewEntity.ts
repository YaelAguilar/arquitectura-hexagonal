import { CarRepository } from "../../domain/repositories/carRepository";

export class ViewEntity {
    constructor(private readonly carRepository: CarRepository) {}
    async run(carId: string) {
        const car = await this.carRepository.getById(carId);
        if (!car) {
          throw new Error(`User id not found ${carId}`);
        }
        console.log("La marca ", car.marca,"corresponde al id: ",car.id);
      }

}