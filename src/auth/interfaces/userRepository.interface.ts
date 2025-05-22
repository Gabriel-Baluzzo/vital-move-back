import { User } from './user.interface';

export interface IUserRepository {
  createUser(email: string, password: string): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
}
