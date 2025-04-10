import { Component, inject } from '@angular/core';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './question/answer/answer.component';
import { MatButtonModule } from '@angular/material/button';
import { SnackbarService } from '../../services/shared/snackbar.service';
import { Store } from '@ngrx/store';
import { selectQuiz } from '../../state/selectors/quiz.selectors';

@Component({
  selector: 'app-play',
  imports: [QuestionComponent, AnswerComponent, MatButtonModule],
  templateUrl: './play.component.html',
  styleUrl: './play.component.scss',
  host: {
    class: 'main-layout',
  },
})
export class PlayComponent {
  private snackBarService = inject(SnackbarService);
  private store = inject(Store);
  quiz$ = this.store.select(selectQuiz);

  constructor() {
    this.quiz$.subscribe((data) => {
      console.log(data);
    });
  }

  openSnackbar(message: string) {
    this.snackBarService.openSnackbar(message);
  }
}
