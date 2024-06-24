import { Actividad } from "./actividad";
import { Socio } from "./socio";

export class Suscripcion {
    _id!: string;
    fechaVtoSus: string;
    fechaSus: string;
    socio: Socio;
    actividad: Actividad;

    constructor(){
        this.fechaVtoSus = "";
        this.fechaSus = "";
        this.socio = new Socio();
        this.actividad = new Actividad();
    }
}
