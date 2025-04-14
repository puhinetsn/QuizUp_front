import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectQuiz } from './quiz.selectors';

export const selectQuizQuestions = createSelector(
  selectQuiz,
  ({ selected }) => selected.quiz
);

export const currentQuestionIndex =
  createFeatureSelector<number>('questionIndex');

export const currentQuestion = createSelector(
  selectQuizQuestions,
  currentQuestionIndex,
  (questions, index) => questions[index] || questions[questions.length - 1]
);

export const isLastQuestion = createSelector(
  selectQuizQuestions,
  currentQuestionIndex,
  (questions, index) => questions.length === index + 1
);
