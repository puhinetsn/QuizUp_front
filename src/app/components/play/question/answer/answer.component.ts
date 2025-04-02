import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

export enum AnswerStatus {
  BASIC,
  SELECTED,
  RIGHT,
  WRONG,
}

@Component({
  selector: 'app-answer',
  imports: [FormsModule],
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.scss',
})
export class AnswerComponent {
  answers: string[] = ['Georgia', 'California', 'New York', 'Texas'];
  answer = input.required<string>();
}
