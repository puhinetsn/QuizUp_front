import { createFeatureSelector } from '@ngrx/store';

export const selectAnswer = createFeatureSelector<string>('answer');
export const selectAnswers = createFeatureSelector<string[]>('answers');
