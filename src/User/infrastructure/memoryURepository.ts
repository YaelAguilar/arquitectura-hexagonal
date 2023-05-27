import pool from "../../db";
import { User } from "../domain/entities/user";
import { UserRepository } from "../domain/repositories/userRepository";

export class MemoryURepository implements UserRepository {

  async getById(userId: string): Promise<User | null> {
    const [rows] = await pool.query(
      "SELECT id, nombre, correo FROM users WHERE id = ?",
      [userId]
    );
    if (!Array.isArray(rows) || rows.length === 0) {
      return null;
    }
    const { id, nombre, correo } = rows[0] as {
      id: string;
      nombre: string;
      correo: string;
    };
    return new User(id, nombre, correo);
  }

  async getAllUsers(): Promise<User[]> {
    const [rows] = await pool.query(
      "SELECT id, nombre, correo FROM users"
      );
    const users: User[] = Array.isArray(rows)
      ? rows.map((row: unknown) => {
          const { id, nombre, correo } = row as {
            id: string;
            nombre: string;
            correo: string;
          };
          return new User(id, nombre, correo);
        })
      : [];
    return users;
  }
}
