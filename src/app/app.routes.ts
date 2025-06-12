import { Routes } from '@angular/router';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent, // כאן יושב הרקע הקבוע
    children: [
      { path: '', component: HomeComponent },
      { path: 'menu', component: MenuComponent }
    ]
  }
];
