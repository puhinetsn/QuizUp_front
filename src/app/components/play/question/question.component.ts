import { Component, inject } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Store } from '@ngrx/store';
import {
  currentQuestion,
  currentQuestionIndex,
  selectQuizQuestions,
} from '../../../state/selectors/question.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-question',
  imports: [MatProgressBarModule, AsyncPipe],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent {
  private store = inject(Store);

  questions$ = this.store.select(selectQuizQuestions);
  question$ = this.store.select(currentQuestion);
  questionIndex$ = this.store.select(currentQuestionIndex);
}
