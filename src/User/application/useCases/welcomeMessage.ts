import { UserRepository } from "../../domain/repositories/userRepository";

export class WelcomeMessage {
  constructor(private readonly userRepository: UserRepository) {}
  async run(userId: string) {
    const user = await this.userRepository.getById(userId);

    if (!user) {
      throw new Error(`User id not found ${userId}`);
    }
    console.log("Bienvenido ", user.nombre,"(",user.correo ,")");
  }
}
