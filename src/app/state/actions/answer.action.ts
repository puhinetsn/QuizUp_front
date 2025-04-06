import { createActionGroup, props } from '@ngrx/store';

export const answers = createActionGroup({
  source: 'Play Page ',
  events: {
    'Question Answered': props<{ answer: string }>(),
    'Question Submitted': props<{ answer: string }>(),
  },
});
