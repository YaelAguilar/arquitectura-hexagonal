import { GetAllUsersUseCase } from "../../application/useCases/GetAllUsersUseCase";
import { WelcomeMessage } from "../../application/useCases/welcomeMessage";
import { UserController } from "../controllers/userController";
import { MemoryURepository } from "../memoryURepository";

const memoryURepository = new MemoryURepository();
export const getAllUsersUseCase = new GetAllUsersUseCase(memoryURepository);
export const welcomeMessage = new WelcomeMessage(memoryURepository);
export const userController = new UserController(welcomeMessage, getAllUsersUseCase);
