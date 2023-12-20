import { Candidatos } from "./candidatos";

export interface Entrevistas {
    id:string;
    fecha_entrevista: Date; // (Fecha en la que se realiza la entrevista)
    candidato: Candidatos[]; // (DNI del candidato)
    puesto_opta:string; // (Puesto que opta por realizar)
    realizada: boolean; // (¿Se ha realizado la entrevista?)
}
