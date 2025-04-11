import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectQuiz } from './quiz.selectors';
import { selectAnswers } from './answer.selectors';

export const selectQuizQuestions = createSelector(
  selectQuiz,
  ({ selected }) => selected.quiz
);

export const currentQuestionIndex =
  createFeatureSelector<number>('questionIndex');

export const currentQuestion = createSelector(
  selectQuizQuestions,
  currentQuestionIndex,
  (questions, index) => questions[index]
);
