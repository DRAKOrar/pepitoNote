import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-crear-habito',
  imports: [CommonModule,FormsModule, RouterModule],
  templateUrl: './crear-habito.component.html',
  styleUrl: './crear-habito.component.scss'
})
export class CrearHabitoComponent {

  habito = '';
  recordatorios: { texto: string; fecha: string; hora: string; completado: boolean }[] = [];

  agregarRecordatorio() {
    if (this.habito.trim()) {
      this.recordatorios.push({
        texto: this.habito,
        fecha: 'Mañana',
        hora: '9:00 AM',
        completado: false,
      });
      this.habito = '';
    }
  }

  toggle(index: number) {
    this.recordatorios[index].completado = !this.recordatorios[index].completado;
  }
}
