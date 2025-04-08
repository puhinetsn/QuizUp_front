import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Quiz } from '../../../models/quiz.model';

@Component({
  selector: 'app-quiz',
  imports: [MatButtonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
})
export class QuizComponent {
  quiz = input.required<Quiz>();
}
