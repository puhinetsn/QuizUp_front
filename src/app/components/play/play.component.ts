import { Component, inject } from '@angular/core';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './question/answer/answer.component';
import { MatButtonModule } from '@angular/material/button';
import { SnackbarService } from '../../services/shared/snackbar.service';
import { Store } from '@ngrx/store';
import { selectQuiz } from '../../state/selectors/quiz.selectors';
import { AsyncPipe } from '@angular/common';
import { Question } from '../../models/quiz.model';
import { currentQuestion } from '../../state/selectors/question.selectors';
import { selectAnswers } from '../../state/selectors/answer.selectors';

@Component({
  selector: 'app-play',
  imports: [QuestionComponent, AnswerComponent, MatButtonModule, AsyncPipe],
  templateUrl: './play.component.html',
  styleUrl: './play.component.scss',
  host: {
    class: 'main-layout',
  },
})
export class PlayComponent {
  private snackBarService = inject(SnackbarService);
  private store = inject(Store);
  answers$ = this.store.select(selectAnswers);

  openSnackbar(message: string) {
    this.snackBarService.openSnackbar(message);
  }
}
