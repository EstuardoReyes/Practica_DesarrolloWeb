export interface Usuario {
    nombre: string;
    apellido: string;
    carnet?: string;
    correo: string;
    pass: string;
    cursos?: Array<string>;
}