import { createFeatureSelector } from '@ngrx/store';
import { Category } from '../../models/categories.model';

export const selectCategories =
  createFeatureSelector<ReadonlyArray<Category>>('categories');
