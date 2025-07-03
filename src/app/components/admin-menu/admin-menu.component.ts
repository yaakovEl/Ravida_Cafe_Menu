import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { StorageService } from '../../services/storage.service';  // שירות התמונות
import { CategoryService } from '../../services/category.service';

// ממשק לפריט בתפריט
export interface MenuItem {
  name: string;
  price: number;
  description?: string;
}

// ממשק לקטגוריה בתפריט
export interface Category {
  name: string;
  items: MenuItem[];
  imageUrl?: string;  // ✅ תמיכה בתמונה
}

@Component({
  selector: 'app-admin-menu',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent {
  categories: Category[] = [];

  // שדות לקטגוריה חדשה
  newCategoryName: string = '';
  newCategoryImageFile?: File;

  // שדות לפריט חדש
  newItemName: string = '';
  newItemPrice: number | null = null;
  newItemDescription: string = '';

  selectedCategoryIndex: number | null = null;

  constructor(
    private storageService: StorageService,
    private categoryService: CategoryService   // ✅ הוספה כאן
  ) { }

  // ✅ בחירת תמונה לקטגוריה
  onCategoryImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.newCategoryImageFile = file;
    }
  }

  async addCategory(): Promise<void> {
    const name = this.newCategoryName.trim();
    if (name) {
      let imageUrl = '';

      if (this.newCategoryImageFile) {
        imageUrl = await this.storageService.uploadImage(
          this.newCategoryImageFile,
          `categories/${Date.now()}_${this.newCategoryImageFile.name}`
        );
      }

      const newCategory: Category = { name, items: [], imageUrl };

      // ✅ שמירה ל־Firestore
      this.categoryService.addCategory(newCategory).then(() => {
        this.newCategoryName = '';
        this.newCategoryImageFile = undefined;
      });
    }
  }

  // ✅ בחירת קטגוריה להוספת פריטים
  selectCategory(index: number): void {
    this.selectedCategoryIndex = index;
  }

  // ✅ הוספת פריט לקטגוריה
  addItem(): void {
    if (
      this.selectedCategoryIndex !== null &&
      this.newItemName.trim() &&
      this.newItemPrice !== null &&
      this.newItemPrice > 0
    ) {
      const category = this.categories[this.selectedCategoryIndex];
      const newItem: MenuItem = {
        name: this.newItemName.trim(),
        price: this.newItemPrice,
        description: this.newItemDescription.trim() || ''
      };

      category.items.push(newItem);

      // איפוס שדות
      this.newItemName = '';
      this.newItemPrice = null;
      this.newItemDescription = '';
    }
  }

  // ✅ מחיקת קטגוריה
  deleteCategory(index: number): void {
    this.categories.splice(index, 1);
    if (this.selectedCategoryIndex === index) {
      this.selectedCategoryIndex = null;
    }
  }

  // ✅ מחיקת פריט
  deleteItem(catIndex: number, itemIndex: number): void {
    this.categories[catIndex].items.splice(itemIndex, 1);
  }
}
