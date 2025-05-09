import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-habit-list',
  imports: [CommonModule,FormsModule],
  templateUrl: './habit-list.component.html',
  styleUrl: './habit-list.component.scss'
})
export class HabitListComponent implements OnInit {
  habits: any[] = [];

  ngOnInit() {
    const storedHabits = localStorage.getItem('habits');
    if (storedHabits) {
      this.habits = JSON.parse(storedHabits).map((habit: any) => ({
        ...habit,
        completedToday: false,
      }));
    }
  }

  toggleHabitCompletion(habit: any) {
    habit.completedToday = !habit.completedToday;
  }
}
