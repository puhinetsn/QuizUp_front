import { createReducer, on } from '@ngrx/store';
import { answers } from '../actions/answer.action';

export const initialAnswer: string = '';
export const initialAnswerArray: string[] = [];

export const initialAnswerReducer = createReducer(
  initialAnswer,
  on(answers.questionAnswered, (_state, { answer }) => answer)
);

export const initialAnswerArrayReducer = createReducer(
  initialAnswerArray,
  on(answers.questionSubmitted, (state, { answer }) => [...state, answer])
);
