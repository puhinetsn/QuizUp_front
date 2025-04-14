import { createReducer, on } from '@ngrx/store';
import { answers } from '../actions/answer.action';

export const initialAnswer: string = '';
export const initialUserAnswers: string[] = [];

export const initialAnswerReducer = createReducer(
  initialAnswer,
  on(answers.questionAnswered, (_state, { answer }) => answer)
);

export const userAnswersReducer = createReducer(
  initialUserAnswers,
  on(answers.questionSubmitted, (state, { answer }) => [...state, answer])
);
