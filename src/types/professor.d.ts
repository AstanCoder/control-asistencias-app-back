import { User } from "./user";

export interface Professor extends User {
    id: number
    type_id: number
    usuario_id: number
    departament_id: number
}

export interface CreateProfessorPayload{
    type_id: number
    usuario_id: number
    departament_id: number
}