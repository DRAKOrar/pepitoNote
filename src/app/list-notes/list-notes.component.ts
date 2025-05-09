import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-notes',
  imports: [CommonModule],
  templateUrl: './list-notes.component.html',
  styleUrl: './list-notes.component.scss'
})
export class ListNotesComponent implements OnInit{

  constructor(private router: Router) {}
  notes: any[] = [];


  irANuevoComponente() {
    this.router.navigate(['/new-note']);
  }
  ngOnInit() {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      this.notes = JSON.parse(storedNotes);
    }
  }
}
