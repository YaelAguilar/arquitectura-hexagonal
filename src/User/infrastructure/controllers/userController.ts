import { Request, Response } from "express";

import { GetAllUsersUseCase } from "../../application/useCases/GetAllUsersUseCase";
import { WelcomeMessage } from "../../application/useCases/welcomeMessage";

export class UserController {
  constructor(private readonly welcomeMessage: WelcomeMessage,
    private readonly getAllUsersUseCase: GetAllUsersUseCase 
    ) {}

    getAllUsers = async (req: Request, res: Response) => {
      try {
        const users = await this.getAllUsersUseCase.execute();
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ error: "Internal server error" });
  }
  }

  async run(req: Request, res: Response) {
    const userId = req.params.id;
    await this.welcomeMessage.run(userId);
    res.status(200).send();
  }
}