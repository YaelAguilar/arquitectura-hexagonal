import express from "express";

import { GetAllUsersUseCase } from "../../application/useCases/GetAllUsersUseCase";
import { WelcomeMessage } from "../../application/useCases/welcomeMessage";
import { UserController } from "../controllers/userController";
import { MemoryURepository } from "../memoryURepository";

const userRouter = express.Router();
const userRepository = new MemoryURepository();
const welcomeMessage = new WelcomeMessage(userRepository);
const getAllUsersUseCase = new GetAllUsersUseCase(userRepository);
const userController = new UserController(welcomeMessage, getAllUsersUseCase);

userRouter.post("/:id/welcome", userController.run.bind(userController));
userRouter.get("/all", userController.getAllUsers);

export { userRouter };
