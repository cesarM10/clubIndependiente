import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isSocioActive: boolean = false;
  isActividadActive: boolean = false;
  isAsistenciaActive: boolean = false;

  setActiveSocio() {
    this.isSocioActive = true;
    this.isActividadActive = false;
    this.isAsistenciaActive = false;
  }
  setActiveActividad() {
    this.isActividadActive = true;
    this.isSocioActive = false;
    this.isAsistenciaActive = false;
  }
  setActiveAsistencia() {
    this.isAsistenciaActive = true;
    this.isSocioActive = false;
    this.isActividadActive = false;
  }
}
