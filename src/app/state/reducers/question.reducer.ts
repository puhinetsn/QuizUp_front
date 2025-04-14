import { createReducer, on } from '@ngrx/store';
import { answers } from '../actions/answer.action';
import { quizActions } from '../actions/quiz.actions';

function initiateIndex(): number {
  const initialIndex = localStorage.getItem('index');
  if (initialIndex) {
    return JSON.parse(initialIndex);
  }
  return 0;
}

export const questionIndexReducer = createReducer(
  initiateIndex(),
  on(answers.questionSubmitted, (state) => {
    localStorage.setItem('index', JSON.stringify(state + 1));
    return state + 1;
  }),
  on(quizActions.quizSelected, () => {
    localStorage.removeItem('index');
    return 0;
  })
);
