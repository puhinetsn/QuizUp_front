import { Component, inject } from '@angular/core';
import { QuestionResultComponent } from './question-result/question-result.component';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import {
  questionAndAnswer,
  quizScore,
} from '../../state/selectors/answer.selectors';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { AnswerStatus } from '../play/question/answer/answer.component';

@Component({
  selector: 'app-result',
  imports: [QuestionResultComponent, MatButtonModule, AsyncPipe],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss',
})
export class ResultComponent {
  private store = inject(Store);
  private router = inject(Router);

  score$ = this.store.select(quizScore);
  questions$ = this.store.select(questionAndAnswer);
  status = AnswerStatus;

  goHome() {
    this.router.navigate(['']);
  }
}
