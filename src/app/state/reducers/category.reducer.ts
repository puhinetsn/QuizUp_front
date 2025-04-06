import { createReducer, on } from '@ngrx/store';
import { categories } from '../actions/category.actions';
import { Category } from '../../models/categories.model';

export const initialState: ReadonlyArray<Category> = [];

export const categoriesReducer = createReducer(
  initialState,
  on(categories, (_state, { categories }) => categories)
);
