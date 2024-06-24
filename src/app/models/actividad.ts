export class Actividad {
    _id!: string;
    nombreActividad: string;
    responsableActividad: string;
    horarioActividad: string;
    valorCuotaActividad: number;

    constructor(){
        this.nombreActividad = '';
        this.responsableActividad = '';
        this.horarioActividad = '';
        this.valorCuotaActividad = 0;
    }
}
