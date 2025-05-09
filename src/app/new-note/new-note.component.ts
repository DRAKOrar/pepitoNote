import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-note',
  imports: [FormsModule, CommonModule],
  templateUrl: './new-note.component.html',
  styleUrl: './new-note.component.scss'
})
export class NewNoteComponent implements OnInit {
  title: string = '';
  note: string = '';
  category: string = '';
  categories: string[] = [];

  ngOnInit() {
    const storedCategories = localStorage.getItem('categories');
    if (storedCategories) {
      this.categories = JSON.parse(storedCategories);
    }
  }

  saveNote() {
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    notes.push({
      title: this.title,
      note: this.note,
      category: this.category,
    });
    localStorage.setItem('notes', JSON.stringify(notes));
    this.title = '';
    this.note = '';
    this.category = '';
  }
}
