export interface Publicacion {
    tipo: string;
    asunto:string;
    creador: string;
    fecha: string;
    comentarios?: Array<string>;
    mensaje?: string;
}