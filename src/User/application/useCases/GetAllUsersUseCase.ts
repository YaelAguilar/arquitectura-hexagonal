import { User } from "../../domain/entities/user";
import { UserRepository } from "../../domain/repositories/userRepository";

export class GetAllUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(): Promise<User[] | null> {
    return this.userRepository.getAllUsers();
  }
}
