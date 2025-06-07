/* eslint-disable prettier/prettier */
// src/auth/interfaces/userRepository.interface.ts
import { User } from './user.interface'; // ✅ Import the new User interface

export interface IUserRepository {
  createUser(email: string, password: string): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
}