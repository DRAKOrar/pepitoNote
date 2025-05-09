import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-create-habit',
  imports: [CommonModule,FormsModule],
  templateUrl: './create-habit.component.html',
  styleUrl: './create-habit.component.scss'
})
export class CreateHabitComponent implements OnInit {
  habitName: string = '';
  selectedCategory: string = '';
  frequency: string = '';
  categories: string[] = [];

  ngOnInit() {
    const storedCategories = localStorage.getItem('categories');
    if (storedCategories) {
      this.categories = JSON.parse(storedCategories);
    }
  }

  saveHabit() {
    if (!this.habitName.trim() || !this.selectedCategory || !this.frequency) {
      alert('Please fill all fields');
      return;
    }

    const habits = JSON.parse(localStorage.getItem('habits') || '[]');
    habits.push({
      name: this.habitName.trim(),
      category: this.selectedCategory,
      frequency: this.frequency,
    });
    localStorage.setItem('habits', JSON.stringify(habits));

    this.habitName = '';
    this.selectedCategory = '';
    this.frequency = '';
  }
}
