import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asignar-recordatorio',
  imports: [CommonModule,FormsModule],
  templateUrl: './asignar-recordatorio.component.html',
  styleUrl: './asignar-recordatorio.component.scss'
})
export class AsignarRecordatorioComponent {

  titulo: string = 'Send report';
  fecha: string = new Date().toISOString().split('T')[0]; // formato YYYY-MM-DD
  hora: string = '09:00';

  constructor(private router: Router) {}

  guardar() {
    console.log('Recordatorio guardado:', { titulo: this.titulo, fecha: this.fecha, hora: this.hora });
    this.router.navigate(['/crear-habito']);
  }
}
