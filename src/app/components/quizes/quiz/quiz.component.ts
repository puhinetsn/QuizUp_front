import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Quiz } from '../../../models/quiz.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { quizActions } from '../../../state/actions/quiz.actions';

@Component({
  selector: 'app-quiz',
  imports: [MatButtonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
})
export class QuizComponent {
  quiz = input.required<Quiz>();
  private router = inject(Router);
  private store = inject(Store);

  onPlay() {
    this.store.dispatch(quizActions.quizSelected({ quiz: this.quiz() }));
    this.router.navigate(['play']);
  }
}
