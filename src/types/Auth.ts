import { User } from "./User";

export interface Auth {
  plainTextToken: string;
  user: User;
}
