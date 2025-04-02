import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { QuizesComponent } from '../quizes/quizes.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, QuizesComponent, MatButtonModule, MatIconModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
