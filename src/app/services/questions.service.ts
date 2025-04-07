import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../models/quiz.model';
import { Difficulty } from '../models/enums/difficulty.enum';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  private http = inject(HttpClient);
  private expressUrl = 'http://localhost:3000/api';

  public getQuestion(
    num: number,
    difficulty: Difficulty,
    category: string
  ): Observable<Question> {
    return this.http.get<Question>(
      `${this.expressUrl}/questions?number=${num}&difficulty=${difficulty}&category=${category}`,
      {
        params: {
          num,
          difficulty,
          category,
        },
      }
    );
  }
}
