import { createReducer, on } from '@ngrx/store';
import { answers } from '../actions/answer.action';
import { quizActions } from '../actions/quiz.actions';

const initialUserAnswers: string[] = [];

export const userAnswersReducer = createReducer(
  initialUserAnswers,
  on(answers.questionSubmitted, (state, { answer }) => [...state, answer]),
  on(quizActions.quizSelected, () => [])
);
