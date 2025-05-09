import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Categoria {
  nombre: string;
  icono: string;
  color?: string;
}

@Component({
  selector: 'app-categorias',
  imports: [CommonModule,FormsModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.scss'
})
export class CategoriasComponent implements OnInit {
  nuevaCategoria: string = '';
  categorias: Categoria[] = [];

  ngOnInit() {
    const data = localStorage.getItem('categorias');
    this.categorias = data ? JSON.parse(data) : [
      { nombre: 'Expenses', icono: '💼' },
      { nombre: 'Health', icono: '❤️' },
      { nombre: 'Work', icono: '📁' }
    ];
  }

  agregar() {
    if (!this.nuevaCategoria.trim()) return;

    this.categorias.push({
      nombre: this.nuevaCategoria,
      icono: '📌'
    });

    this.nuevaCategoria = '';
    this.guardar();
  }

  guardar() {
    localStorage.setItem('categorias', JSON.stringify(this.categorias));
  }
}
