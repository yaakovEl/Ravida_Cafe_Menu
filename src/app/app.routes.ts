import { Routes } from '@angular/router';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component'; // 👈 ייבוא חדש

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'admin/menu', component: AdminMenuComponent } // 👈 הנתיב החדש
    ]
  }
];
