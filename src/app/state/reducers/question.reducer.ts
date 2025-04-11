import { createReducer, on } from '@ngrx/store';
import { answers } from '../actions/answer.action';
import { quizSelect } from './quiz.reducer';
import { quizActions } from '../actions/quiz.actions';

export const questionIndexReducer = createReducer(
  0,
  on(answers.questionSubmitted, (state) => state + 1),
  on(quizActions.quizSelected, () => 0)
);
