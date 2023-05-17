import { Role } from "./auth";

export interface User {
  id: int;
  email: string;
  name: string;
  surname: string;
  password: string;
  role: Role;
  ci: string
}

export interface AdminUser extends User {
  isSudo: boolean;
}
