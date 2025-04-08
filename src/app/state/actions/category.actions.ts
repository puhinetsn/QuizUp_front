import { createAction, props } from '@ngrx/store';
import { Category } from '../../models/categories.model';

export const categoriesLoad = createAction(
  '[Main Page] Categories Loaded',
  props<{ categories: Category[] }>()
);
