import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-category',
  imports: [CommonModule,FormsModule],
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.scss'
})
export class CreateCategoryComponent {

  categoryName: string = '';
  categories: string[] = [];

  constructor() {
    const storedCategories = localStorage.getItem('categories');
    if (storedCategories) {
      this.categories = JSON.parse(storedCategories);
    }
  }

  saveCategory() {
    if (this.categoryName.trim()) {
      this.categories.push(this.categoryName.trim());
      localStorage.setItem('categories', JSON.stringify(this.categories));
      this.categoryName = '';
    }
  }
}
