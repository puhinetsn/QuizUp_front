import { createReducer, on } from '@ngrx/store';
import { categoriesLoad } from '../actions/category.actions';
import { Category } from '../../models/categories.model';

export const initialState: ReadonlyArray<Category> = [];

export const categoriesReducer = createReducer(
  initialState,
  on(categoriesLoad, (_state, { categories }) => categories)
);
