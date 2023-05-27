import { User } from "../entities/user";
export interface UserRepository {
  getAllUsers(): Promise<User[]>;
  getById(userId: string): Promise<User | null>;
}
