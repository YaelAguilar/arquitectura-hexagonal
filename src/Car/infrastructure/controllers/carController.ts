import { Request, Response } from "express";

import { ViewEntity } from "../../application/useCases/viewEntity";

export class CarController {
    constructor(private readonly viewEntity : ViewEntity) {}

    async run(req: Request, res: Response) {
        const carId = req.params.id;
        await this.viewEntity.run(carId);
        res.status(200).send();
      }
}