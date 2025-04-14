import { Component, inject, input } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  currentQuestion,
  currentQuestionIndex,
} from '../../../state/selectors/question.selectors';
import { AsyncPipe } from '@angular/common';
import { Question } from '../../../models/quiz.model';

@Component({
  selector: 'app-question-result',
  imports: [],
  templateUrl: './question-result.component.html',
  styleUrl: './question-result.component.scss',
})
export class QuestionResultComponent {
  private store = inject(Store);
  question = input.required<Question>();
  answer = input.required<string>();
}
