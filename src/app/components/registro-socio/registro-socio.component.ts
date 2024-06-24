import { Component } from '@angular/core';
import { SocioService } from '../../services/socio.service';
import { Socio } from '../../models/socio';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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


  constructor(private socioService : SocioService) { 
    this.socio = new Socio();
    // this.crearSocio();
    // this.buscarSocio();

  }


  //probado.
  crearSocio(){
    // this.socio.numeroSocio= "1";
    // this.socio.dniSocio= "40123123";
    // this.socio.nombreSocio= "Juan";
    // this.socio.apellidoSocio= "Lopez";
    // this.socio.fechaNacimiento= "2000-01-01";
    // this.socio.correoSocio= "correo";
    // this.socio.telefonoSocio= 123456789;
    // this.socio = new Socio;
    console.log(this.socio);

    this.socioService.postSocio(this.socio).subscribe(
      data => {
        console.log(data);
        this.dniBuscado = "";
        this.socio = new Socio();
        alert("Se registró el nuevo socio exitosamente.");
      },
      error => {
        console.log(error);
      }
    )
  }

  //Buscar socio.
  buscarSocio(){
    this.socioService.getSocioByDni(this.dniBuscado).subscribe(
      data => {
        console.log(data);
        let vsocio = new Socio();
        data.forEach((soc : any) =>{
          Object.assign(vsocio, soc);
        
        });
        if (vsocio.dniSocio==""){
          this.estadoSocio = "DNI no registrado";
          this.socio.dniSocio = this.dniBuscado;
        }else{
          if(vsocio.dniSocio==this.dniBuscado){
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
