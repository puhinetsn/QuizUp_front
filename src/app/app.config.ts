import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient } from '@angular/common/http';
import { categoriesReducer } from './state/reducers/category.reducer';
import { quizLoad, quizSelect } from './state/reducers/quiz.reducer';
import { questionIndexReducer } from './state/reducers/question.reducer';
import { userAnswersReducer } from './state/reducers/answer.reducers';

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
      questionIndex: questionIndexReducer,
      userAnswers: userAnswersReducer,
    }),
    provideStoreDevtools({
      maxAge: 25,
      autoPause: true,
      trace: false,
      traceLimit: 75,
      connectInZone: true,
    }),
  ],
};
