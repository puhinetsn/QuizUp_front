import { createReducer, on } from '@ngrx/store';
import { quizActions } from '../actions/quiz.actions';
import { Quiz } from '../../models/quiz.model';

export const initialQuizes: ReadonlyArray<Quiz> = [];

function initiateSelectedQuiz(): Quiz | null {
  const quizSelected = localStorage.getItem('quiz');
  if (quizSelected) {
    return JSON.parse(quizSelected);
  }
  return null;
}

export const quizLoad = createReducer(
  initialQuizes,
  on(quizActions.quizesLoaded, (state, { quiz }) => quiz)
);

export const quizSelect = createReducer(
  { selected: initiateSelectedQuiz() },
  on(quizActions.quizSelected, (state, { quiz }) => {
    localStorage.setItem('quiz', JSON.stringify(quiz));
    return { selected: quiz };
  })
);
