import { createFeatureSelector, createSelector } from '@ngrx/store';
import { currentQuestion, selectQuizQuestions } from './question.selectors';
import { randomizeArr } from '../../utils/random.util';

export const selectAnswers = createSelector(currentQuestion, (question) =>
  randomizeArr([question.correct_answer, ...question.incorrect_answers])
);

export const selectUserAnswers = createFeatureSelector<string[]>('userAnswers');

export const questionAndAnswer = createSelector(
  selectQuizQuestions,
  selectUserAnswers,

  (questions, answers) =>
    questions.map((question, i) => ({
      question: question,
      answer: answers[i],
    }))
);

export const quizScore = createSelector(questionAndAnswer, (array) => {
  const score = array.reduce(
    (accumulator, currentValue) =>
      currentValue.answer === currentValue.question.correct_answer
        ? accumulator + 1
        : accumulator,
    0
  );

  return score;
});
