import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-nota',
  imports: [CommonModule,FormsModule],
  templateUrl: './editar-nota.component.html',
  styleUrl: './editar-nota.component.scss'
})
export class EditarNotaComponent {
  titulo: string = 'Shopping List';
  contenido: string = '• Milk\n• Eggs\n• Bread';

  guardarNota() {
    console.log('Nota guardada:', {
      titulo: this.titulo,
      contenido: this.contenido,
    });
    // Aquí podrías emitir un evento o guardar en backend/localStorage
  }

}
