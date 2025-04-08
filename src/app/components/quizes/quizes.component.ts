import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { QuizComponent } from './quiz/quiz.component';
import { Store } from '@ngrx/store';
import { selectCategories } from '../../state/selectors/categories.selectors';
import { CategoriesService } from '../../services/categories.service';
import { selectQuizzes } from '../../state/selectors/quiz.selectors';
import { categoriesLoad } from '../../state/actions/category.actions';
import { forkJoin, map, Subject, take, takeUntil } from 'rxjs';
import { QuestionsService } from '../../services/questions.service';
import { randomArrEl, randomEnum, randomInt } from '../../utils/random.util';
import { Difficulty } from '../../models/enums/difficulty.enum';
import { quizActions } from '../../state/actions/quiz.actions';
import { Quiz } from '../../models/quiz.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-quizes',
  imports: [QuizComponent, AsyncPipe],
  templateUrl: './quizes.component.html',
  styleUrl: './quizes.component.scss',
})
export class QuizesComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  private store = inject(Store);
  private categoriesService = inject(CategoriesService);
  private questionsService = inject(QuestionsService);
  quizzes$ = this.store.select(selectQuizzes);
  categories$ = this.store.select(selectCategories);

  ngOnInit(): void {
    this.categoriesService
      .getCategories()
      .pipe(take(1))
      .subscribe((categories) => {
        this.store.dispatch(categoriesLoad({ categories }));

        const quizzes = Array.from({ length: 10 }).map(() =>
          this.questionsService.getQuestion(
            randomInt(1, 5),
            randomEnum(Difficulty) as Difficulty,
            randomArrEl(categories)._id
          )
        );

        forkJoin(quizzes)
          .pipe(takeUntil(this.destroy$))
          .subscribe((quiz) =>
            this.store.dispatch(quizActions.quizesLoaded({ quiz }))
          );
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
