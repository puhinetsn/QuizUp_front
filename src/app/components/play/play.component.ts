import { Component, inject } from '@angular/core';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './question/answer/answer.component';
import { MatButtonModule } from '@angular/material/button';
import { SnackbarService } from '../../services/shared/snackbar.service';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { selectAnswers } from '../../state/selectors/answer.selectors';
import { Router } from '@angular/router';
import { AnswerStatus } from './question/answer/answer.component';
import { answers } from '../../state/actions/answer.action';
import { isLastQuestion } from '../../state/selectors/question.selectors';
import { toSignal } from '@angular/core/rxjs-interop';

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
  private router = inject(Router);
  status = AnswerStatus;

  answers$ = this.store.select(selectAnswers);
  isLastQuestion = toSignal(this.store.select(isLastQuestion));
  selected: string = '';

  openSnackbar(message: string) {
    this.snackBarService.openSnackbar(message);
  }

  answerSelected(answer: string) {
    this.selected = answer;
    this.store.dispatch(answers.questionAnswered({ answer: answer }));
  }

  submitAnswer() {
    if (this.selected === '') {
      this.openSnackbar('Answer the question first.');
    } else {
      if (this.isLastQuestion()) {
        this.router.navigate(['result']);
      }

      this.store.dispatch(answers.questionSubmitted({ answer: this.selected }));
      this.selected = '';
    }
  }

  goHome() {
    this.router.navigate(['']);
  }
}
