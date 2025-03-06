import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { QuizesComponent } from '../quizes/quizes.component';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, QuizesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
