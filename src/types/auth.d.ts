type Role = "admin" | "student" | "proffesor";

export interface RegisterPayload {
  name: string;
  surname: string;
  password: string;
  email: string;
  ci: string 
  centro_id: number
}

export interface CreateUserPayload extends RegisterPayload {
  rol_id: number;

}

export interface LoginPayload {
  username?: string;
  email: string;
  password: string;
}
