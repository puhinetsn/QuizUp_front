import { createSelector } from '@ngrx/store';
import { selectQuiz } from './quiz.selectors';
import { selectAnswers } from './answer.selectors';

export const selectQuizQuestions = createSelector(
  selectQuiz,
  (quiz) => quiz.quiz
);

export const currentQuestion = createSelector(
  selectQuizQuestions,
  selectAnswers,
  (questions, answers) => questions[answers.length]
);
