import { CreateUserPayload } from "./auth";
import { User } from "./user";

export interface Student extends User {
    id: number
    esRepitente: boolean
    usuario_id: number
    matricula_id: number
}

export interface CreateStudentPayload {
    esRepitente: boolean
    matricula_id: number
    usuario_id
}

export interface ProfessorCreateStudentPayload extends CreateUserPayload {
    esRepitente: boolean
    matricula_id: number
}