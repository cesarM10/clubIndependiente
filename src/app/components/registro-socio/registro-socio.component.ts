import { Component, inject } from '@angular/core';
import { SocioService } from '../../services/socio.service';
import { Socio } from '../../models/socio';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro-socio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro-socio.component.html',
  styleUrl: './registro-socio.component.css'
})
export class RegistroSocioComponent {

  socio: Socio = new Socio();
  dniBuscado: string = "";
  estadoSocio: string = "";
  siguienteId: string = "";

  toastSrvc = inject(ToastrService);

  constructor(private socioService: SocioService) {
    this.socio = new Socio();
    // this.crearSocio();
    // this.buscarSocio();

  }


  //probado.
  registrarSocio() {
    
    this.socioService.postSocio(this.socio).subscribe(
      data => {
        console.log(data);
        this.dniBuscado = "";
        this.socio = new Socio();
        this.toastSrvc.success('Se registró el nuevo socio exitosamente.');
        // alert("Se registró el nuevo socio exitosamente.");
      },
      error => {
        console.log(error);
      }
    )
  }

  //Buscar socio.
  verificarSocio() {
    if (this.dniBuscado == "") {
      alert("Ingrese el numero de DNI.");
    } else {
      this.socioService.getSocioByDni(this.dniBuscado).subscribe(
        data => {
          console.log(data);
          let vsocio = new Socio();
          data.forEach((soc: any) => {
            Object.assign(vsocio, soc);

          });
          if (vsocio.dniSocio == "") {
            this.estadoSocio = "DNI no registrado";
            this.socio.dniSocio = this.dniBuscado;
            
          } else {
            if (vsocio.dniSocio == this.dniBuscado) {
              this.estadoSocio = "DNI de socio registrado";
              this.socio.dniSocio = "";
            }
          }
        },
        error => {
          console.log(error);
        }
      )
    }
  }

  generarNrosocio(){
    let siguienteId: string = "";
    this.socioService.getUltimo().subscribe(
      data => {
        console.log(data);
        if (data == "") {
          console.log('base de datos vacia');
          this.socio.numeroSocio = "1";
          console.log(this.socio);
        }else{
          siguienteId = (parseInt(data.numeroSocio) + 1).toString();
          console.log("Siguiente numero de socio: ",siguienteId);
          this.socio.numeroSocio = siguienteId;
        }        
      },
      error => {
        console.log(error);
      }

    )
  }

  limpiar() {
    this.dniBuscado = "";
    this.socio = new Socio();
    this.estadoSocio = "";
  }
}
