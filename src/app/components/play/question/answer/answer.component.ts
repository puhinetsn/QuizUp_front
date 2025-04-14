import { Component, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

export enum AnswerStatus {
  BASIC = 'basic',
  SELECTED = 'selected',
  RIGHT = 'right',
  WRONG = 'wrong',
}

@Component({
  selector: 'app-answer',
  imports: [FormsModule],
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.scss',
})
export class AnswerComponent {
  answer = input.required<string>();
  answerStatus = input.required<AnswerStatus>();

  status = AnswerStatus;
}
