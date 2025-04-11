import { createSelector } from '@ngrx/store';
import { currentQuestion, currentQuestionIndex } from './question.selectors';
import { randomizeArr } from '../../utils/random.util';

// export const selectAnswer = createSelector<string>('answer');
export const selectAnswers = createSelector(currentQuestion, (question) =>
  randomizeArr([question.correct_answer, ...question.incorrect_answers])
);
