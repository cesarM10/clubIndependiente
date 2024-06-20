import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistroSocioComponent } from './components/registro-socio/registro-socio.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistroActividadComponent } from './components/registro-actividad/registro-actividad.component';
import { SuscripcionActividadComponent } from './components/suscripcion-actividad/suscripcion-actividad.component';
import { RegistroAsistenciaComponent } from './components/registro-asistencia/registro-asistencia.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, RegistroSocioComponent, RegistroActividadComponent, SuscripcionActividadComponent, RegistroAsistenciaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clubIndependiente';
}
