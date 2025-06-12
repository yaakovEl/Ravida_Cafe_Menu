import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
    imports: [CommonModule, ButtonModule, RouterModule],

})
export class HomeComponent { }
