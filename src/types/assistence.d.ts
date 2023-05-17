export interface Assistence {
    estudiante_usuario_id: number
    materia_id: number
    estado_asistencia_id: number
    fecha: Date
}

export interface AssistenceStatus {
    value: string
    label: string
}