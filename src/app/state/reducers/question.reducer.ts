import { createReducer, on } from '@ngrx/store';
import { questionAnswer } from '../actions/question.actions';

const initialState: {
  answer: string | null;
} = { answer: null };

export const categoriesReducer = createReducer(
  initialState,
  on(questionAnswer, (state, { answer }) => ({ answer }))
);
