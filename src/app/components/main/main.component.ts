import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { QuizesComponent } from '../quizes/quizes.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { selectQuizzes } from '../../state/selectors/quiz.selectors';
import { toSignal } from '@angular/core/rxjs-interop';
import { randomArrEl } from '../../utils/random.util';
import { Router } from '@angular/router';
import { quizActions } from '../../state/actions/quiz.actions';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, QuizesComponent, MatButtonModule, MatIconModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  private store = inject(Store);
  private router = inject(Router);
  quizzes = toSignal(this.store.select(selectQuizzes));

  imLucky() {
    const quizzes = this.quizzes();
    if (quizzes) {
      const randQuiz = randomArrEl(quizzes);
      this.store.dispatch(quizActions.quizSelected({ quiz: randQuiz }));
      this.router.navigate(['play']);
    }
  }
}
