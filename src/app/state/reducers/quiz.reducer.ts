import { createReducer, on } from '@ngrx/store';
import { quizActions } from '../actions/quiz.actions';
import { Quiz } from '../../models/quiz.model';

export const initialQuizes: ReadonlyArray<Quiz> = [];
export const initialSelectedQuiz: { selected: Quiz | null } = {
  selected: null,
};

export const quizLoad = createReducer(
  initialQuizes,
  on(quizActions.quizesLoaded, (state, { quiz }) => quiz)
);

export const quizSelect = createReducer(
  initialSelectedQuiz,
  on(quizActions.quizSelected, (state, { quiz }) => ({ selected: quiz }))
);
