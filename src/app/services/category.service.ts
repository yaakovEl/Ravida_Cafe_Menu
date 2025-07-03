import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface MenuItem {
    name: string;
    price: number;
    description?: string;
    imageUrl?: string;
}

export interface Category {
    id?: string;
    name: string;
    items: MenuItem[];
    imageUrl?: string;
}

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    private categoriesRef: any;

    constructor(private firestore: Firestore) {
        // ✅ יצירת categoriesRef בתוך הקונסטרקטור
        this.categoriesRef = collection(this.firestore, 'categories');
    }

    getCategories(): Observable<Category[]> {
        return collectionData(this.categoriesRef, { idField: 'id' }) as Observable<Category[]>;
    }

    addCategory(category: Category): Promise<any> {
        return addDoc(this.categoriesRef, category);
    }

    updateCategory(category: Category): Promise<void> {
        const docRef = doc(this.firestore, `categories/${category.id}`);
        return updateDoc(docRef, {
            name: category.name,
            items: category.items,
            imageUrl: category.imageUrl
        });
    }

    deleteCategory(id: string): Promise<void> {
        const docRef = doc(this.firestore, `categories/${id}`);
        return deleteDoc(docRef);
    }
}
