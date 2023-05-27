import { Request, Response } from "express";

import { ViewPrice } from "../../application/useCases/viewPrice";
import { ViewStorage } from "../../application/useCases/viewStorage";

export class FruitController {
    constructor(private readonly viewPrice: ViewPrice,
      private readonly viewStorage: ViewStorage
      ) {}

      getStorage = async (req: Request, res: Response) => {
        try {
          const fruits = await this.viewStorage.execute();
          res.status(200).json(fruits);
        } catch (error) {
          res.status(500).json({ error: "Internal server error" });
    }
    }

    async run(req: Request, res: Response) {
        const fruitId = req.params.id;
        await this.viewPrice.run(fruitId);
        res.status(200).send();
      }
}