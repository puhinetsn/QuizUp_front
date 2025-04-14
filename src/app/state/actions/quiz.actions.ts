import { createActionGroup, props } from '@ngrx/store';
import { Question, Quiz } from '../../models/quiz.model';

export const quizActions = createActionGroup({
  source: 'Main Page',
  events: {
    'Quizes Loaded': props<{ quiz: Quiz[] }>(),
    'Quiz Selected': props<{ quiz: Quiz }>(),
  },
});
