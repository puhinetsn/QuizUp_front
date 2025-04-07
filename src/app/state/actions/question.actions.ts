import { createAction, props } from '@ngrx/store';

export const questionAnswer = createAction(
  '[Play Page] Question Answered',
  props<{ answer: string }>()
);
