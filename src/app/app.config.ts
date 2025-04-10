import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { categoriesReducer } from './state/reducers/category.reducer';
import { quizLoad, quizSelect } from './state/reducers/quiz.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideStore(),
    provideStore({
      categories: categoriesReducer,
      quizzes: quizLoad,
      quiz: quizSelect,
    }),
  ],
};
