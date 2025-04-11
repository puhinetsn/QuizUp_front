import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question, Quiz } from '../models/quiz.model';
import { Difficulty } from '../models/enums/difficulty.enum';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  private http = inject(HttpClient);
  private expressUrl = 'http://localhost:3000/api';

  public getQuestion(
    number: number,
    difficulty: Difficulty,
    category: string
  ): Observable<Quiz> {
    return this.http.get<Quiz>(`${this.expressUrl}/questions/${category}`, {
      params: {
        number,
        difficulty,
      },
    });
  }
}
