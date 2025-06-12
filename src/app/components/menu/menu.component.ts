import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

interface MenuItem {
  name: string;
  price: number;
  images: string[];
  activeImageIndex: number;
}

interface MenuCategory {
  category: string;
  image: string;
  items: MenuItem[];
}

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
  ],
})
export class MenuComponent {
  dialogVisible = false;
  selectedCategory: MenuCategory | null = null;

  menu: MenuCategory[] = [
    {
      category: 'פיצות טאבון',
      image: 'assets/category/pizza_ston.jpg',
      items: [
        {
          name: 'פיצה מרגריטה',
          price: 32,
          images: [
            'assets/category/pizza/margheritapizza0.jpg',
            'assets/category/pizza/margheritapizza1.jpg',
            'assets/category/pizza/Margherita pizza3.jpg'
          ],
          activeImageIndex: 0
        },
        {
          name: 'פיצה מוצרלה',
          price: 39,
          images: [
            'assets/category/pizza/margheritapizza0.jpg',
            'assets/category/pizza/margheritapizza1.jpg',
            'assets/category/pizza/Margherita pizza3.jpg'
          ],
          activeImageIndex: 0
        },
        {
          name: 'פיצה פטריות וגבינות',
          price: 37,
          images: [
            'assets/category/pizza/margheritapizza0.jpg',
            'assets/category/pizza/margheritapizza1.jpg',
            'assets/category/pizza/Margherita pizza3.jpg'
          ],
          activeImageIndex: 0
        }
      ]
    },
    {
      category: 'משקאות חמים',
      image: 'assets/category/coffe_1.jpg',
      items: [
        {
          name: 'אספרסו',
          price: 9,
          images: ['assets/category/pizza/Margherita pizza3.jpg'],
          activeImageIndex: 0
        },
        {
          name: 'קפוצ’ינו',
          price: 12,
          images: ['assets/category/pizza/Margherita pizza3.jpg'],
          activeImageIndex: 0
        },
        {
          name: 'שוקו חם',
          price: 10,
          images: ['assets/category/pizza/Margherita pizza3.jpg'],
          activeImageIndex: 0
        }
      ]
    },
    {
      category: 'סלטים',
      image: 'assets/category/Vegetable_salad.jpg',
      items: [
        {
          name: 'סלט יווני',
          price: 26,
          images: ['assets/category/pizza/Margherita pizza3.jpg'],
          activeImageIndex: 0
        },
        {
          name: 'סלט טונה',
          price: 28,
          images: ['assets/category/pizza/Margherita pizza3.jpg'],
          activeImageIndex: 0
        },
        {
          name: 'סלט קפרזה',
          price: 25,
          images: ['assets/category/pizza/Margherita pizza3.jpg'],
          activeImageIndex: 0
        }
      ]
    },
    {
      category: 'בורקסים',
      image: 'assets/category/istockphoto.jpg',
      items: [
        {
          name: 'בורקס גבינה',
          price: 8,
          images: ['assets/category/pizza/Margherita pizza3.jpg'],
          activeImageIndex: 0
        },
        {
          name: 'בורקס תפוח אדמה',
          price: 9,
          images: ['assets/category/pizza/Margherita pizza3.jpg'],
          activeImageIndex: 0
        },
        {
          name: 'בורקס תרד',
          price: 10,
          images: ['assets/category/pizza/Margherita pizza3.jpg'],
          activeImageIndex: 0
        }
      ]
    }
  ];

  openDialog(category: MenuCategory) {
    category.items.forEach(item => item.activeImageIndex = 0);
    this.selectedCategory = category;
    this.dialogVisible = true;
  }

  nextImage(item: MenuItem) {
    item.activeImageIndex = (item.activeImageIndex + 1) % item.images.length;
  }

  prevImage(item: MenuItem) {
    item.activeImageIndex = (item.activeImageIndex - 1 + item.images.length) % item.images.length;
  }
}
