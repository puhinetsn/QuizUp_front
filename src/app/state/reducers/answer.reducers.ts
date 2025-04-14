import { createReducer, on } from '@ngrx/store';
import { answers } from '../actions/answer.action';
import { quizActions } from '../actions/quiz.actions';

function initiateUserAnswers(): string[] {
  const answers = localStorage.getItem('answers');
  if (answers) {
    return JSON.parse(answers);
  }
  return [];
}

export const userAnswersReducer = createReducer(
  initiateUserAnswers(),
  on(answers.questionSubmitted, (state, { answer }) => {
    localStorage.setItem('answers', JSON.stringify([...state, answer]));
    return [...state, answer];
  }),
  on(quizActions.quizSelected, () => {
    localStorage.removeItem('answers');
    return [];
  })
);
