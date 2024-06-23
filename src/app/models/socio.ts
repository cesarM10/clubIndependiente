export class Socio {
    _id!: string;
    numeroSocio: string;
    dniSocio: string;
    nombreSocio: string;
    apellidoSocio: string;
    fechaNacimiento: string;
    correoSocio: string;
    telefonoSocio: number;

    constructor(){
        this.numeroSocio = '';
        this.dniSocio = '';
        this.nombreSocio = '';
        this.apellidoSocio = '';
        this.fechaNacimiento = '';
        this.correoSocio = '';
        this.telefonoSocio = 0;
    }

   
}
