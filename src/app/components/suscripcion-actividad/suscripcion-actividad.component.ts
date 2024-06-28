import { Component } from '@angular/core';
import { SuscripcionService } from '../../services/suscripcion.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Suscripcion } from '../../models/suscripcion';
import { ActividadService } from '../../services/actividad.service';
import { Actividad } from '../../models/actividad';
import { SocioService } from '../../services/socio.service';
import { Socio } from '../../models/socio';

@Component({
  selector: 'app-suscripcion-actividad',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './suscripcion-actividad.component.html',
  styleUrl: './suscripcion-actividad.component.css'
})
export class SuscripcionActividadComponent {
  dniBuscado: string = "";
  suscripcion: Suscripcion = new Suscripcion();
  suscripciones: Array<Suscripcion> = [];
  estado: string = "";

  socio: Socio = new Socio();

  actividades: Array<Actividad> = [];
  actividad: Actividad = new Actividad();

  idSuscripcionEliminar: string = "";

  constructor(private suscripcionService: SuscripcionService,
    private actividadService: ActividadService,
    private socioService: SocioService) {
    this.dniBuscado = "";
    this.suscripcion = new Suscripcion();
    this.suscripciones = [];
    this.estado = "";

    this.actividad = new Actividad();
    this.actividades = [];

    this.socio = new Socio();

    this.obtenerActividades();
  }

  buscarSocio() {
    if (this.dniBuscado == "") {
      alert("Ingrese el dni");
    } else {
      this.socioService.getSocioByDni(this.dniBuscado).subscribe(
        data => {
          console.log(data);
          let vsocio = new Socio();
          data.forEach((soc: any) => {
            Object.assign(vsocio, soc);

          });
          if (vsocio.dniSocio == "") {
            this.estado = "DNI no registrado";
            this.socio.dniSocio = this.dniBuscado;
          } else {
            if (vsocio.dniSocio == this.dniBuscado) {
              this.estado = "Socio registrado";
              this.socio = vsocio;
              this.suscripcion.socio = this.socio;
              this.obtenerSuscripciones();
            }
          }
        },
        error => {
          console.log(error);
        }
      )
    }
  }

  obtenerSuscripciones() {
    this.suscripciones = [];
    this.suscripcionService.getSuscripciones(this.dniBuscado).subscribe(
      result => {
        console.log(result);
        if (result.length > 0) {
          let vsuscripcion = new Suscripcion();
          result.forEach((element: any) => {
            Object.assign(vsuscripcion, element);
            this.suscripciones.push(vsuscripcion);
            vsuscripcion = new Suscripcion();
          });

          if (this.suscripciones.length > 0) {
            this.suscripcion.socio = this.suscripciones[0].socio;
          }
          this.estado = "Socio encontrado.";
        } else {
          console.log("");
          this.estado = "Socio sin suscripcion."
        }
      },
      error => {
        console.log("Algo paso: ", error);
      }
    )
  }


  obtenerActividades() {
    this.actividadService.getActividades().subscribe(
      result => {
        console.log(result);
        let vactividad = new Actividad();
        result.forEach((element: any) => {
          Object.assign(vactividad, element);
          this.actividades.push(vactividad);
          vactividad = new Actividad();
        });
      },
      error => {
        console.log("Algo paso: ", error);
      }
    )
  }

  suscribirActividad() {
    //Arreglar esto para que reciba el socio y la actividad
    const hoy = new Date();
    const fechaSus = hoy.toISOString().split('T')[0];
    console.log(fechaSus);

    const fechaConUnMes = new Date(hoy.setMonth(hoy.getMonth() + 1));
    const fechaVto = fechaConUnMes.toISOString().split('T')[0];
    console.log(fechaVto);

    this.suscripcion.fechaSus = fechaSus;
    this.suscripcion.fechaVtoSus = fechaVto;

    this.suscripcionService.createSuscripcion(this.suscripcion).subscribe(
      result => {
        console.log(result);
        alert("Suscripcion registrada correctamente.")
        this.obtenerSuscripciones();
      },
      error => {
        console.log("Algo paso: ", error);
      }
    )
  }

  asignarIdActividad(idActividad: string) {
    this.suscripcion.actividad._id = idActividad;
    console.log(this.suscripcion.actividad._id);
  }

  eliminarSuscripcion() {
    this.suscripcionService.deleteSuscripcion(this.idSuscripcionEliminar).subscribe(
      result => {
        console.log(result);
        alert("Suscripcion eliminada correctamente.")
        this.obtenerSuscripciones();
      },
      error => {
        console.log("Algo paso: ", error);
      }
    )
  }

  confirmarEliminacion(idSuscripcion: string){
    this.idSuscripcionEliminar = idSuscripcion;
    console.log(this.idSuscripcionEliminar);
  }

  limpiar() {
    this.dniBuscado = "";
    this.suscripcion = new Suscripcion();
    this.suscripciones = [];
    this.estado = "";
    this.socio = new Socio();
  }
}
