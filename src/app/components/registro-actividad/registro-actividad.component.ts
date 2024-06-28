import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActividadService } from '../../services/actividad.service';
import { Actividad } from '../../models/actividad';

@Component({
  selector: 'app-registro-actividad',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro-actividad.component.html',
  styleUrl: './registro-actividad.component.css'
})
export class RegistroActividadComponent {

  actividad: Actividad = new Actividad();

  constructor(private actividadService: ActividadService) {
    // this.crearActividad();
  }


  crearActividad() {
    // this.actividad.nombreActividad= "Hockey";
    // this.actividad.responsableActividad= "Antonela Flores";
    // this.actividad.horarioActividad= "Miercoles y Jueves de  10 a 12 hs"
    // this.actividad.valorCuotaActividad= 6000;

    console.log(this.actividad);
    this.actividadService.postActividad(this.actividad).subscribe(
      data => {
        console.log(data);
        this.actividad = new Actividad();
        alert("Se registró la actividad");

      },
      error => {
        console.log(error);
      }
    )

  }
  // validarFormularioActividad() {
  //   if (this.actividad.nombreActividad == "" || this.actividad.responsableActividad == "" || this.actividad.horarioActividad == "" || this.actividad.valorCuotaActividad == 0) {
  //     alert("Todos los campos son obligatorios");
  //     return false;
  //   }
  //   return true;
  // }




}
