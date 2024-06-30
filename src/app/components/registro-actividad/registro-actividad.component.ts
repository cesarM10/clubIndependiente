import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActividadService } from '../../services/actividad.service';
import { Actividad } from '../../models/actividad';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro-actividad',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro-actividad.component.html',
  styleUrl: './registro-actividad.component.css'
})
export class RegistroActividadComponent {

  actividad: Actividad = new Actividad();

  toastSrvc = inject(ToastrService);

  constructor(private actividadService: ActividadService) {
    // this.crearActividad();
  }


  crearActividad() {
    console.log(this.actividad);
    this.actividadService.postActividad(this.actividad).subscribe(
      data => {
        console.log(data);
        this.actividad = new Actividad();
        this.toastSrvc.success('Se registró la actividad exitosamente.');
      },
      error => {
        console.log(error);
      }
    )

  }

}
