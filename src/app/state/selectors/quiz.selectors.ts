import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Quiz } from '../../models/quiz.model';

export const selectQuizzes =
  createFeatureSelector<ReadonlyArray<Quiz>>('quizzes');

export const selectQuiz = createFeatureSelector<Quiz>('quiz');
