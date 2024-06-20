import { Routes } from '@angular/router';
import { RegistroSocioComponent } from './components/registro-socio/registro-socio.component';
import { RegistroActividadComponent } from './components/registro-actividad/registro-actividad.component';
import { SuscripcionActividadComponent } from './components/suscripcion-actividad/suscripcion-actividad.component';
import { RegistroAsistenciaComponent } from './components/registro-asistencia/registro-asistencia.component';

export const routes: Routes = [
    {path: '', component:RegistroSocioComponent},
    {path: 'registro-socio', component:RegistroSocioComponent},
    {path: 'registro-actividad', component: RegistroActividadComponent},
    {path: 'suscripcion-actividad', component: SuscripcionActividadComponent},
    {path: 'registro-asistencia', component: RegistroAsistenciaComponent}
];
