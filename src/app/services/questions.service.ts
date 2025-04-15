import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question, Quiz } from '../models/quiz.model';
import { Difficulty } from '../models/enums/difficulty.enum';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  public getQuestion(
    number: number,
    difficulty: Difficulty,
    category: string
  ): Observable<Quiz> {
    return this.http.get<Quiz>(`${this.apiUrl}/questions/${category}`, {
      params: {
        number,
        difficulty,
      },
    });
  }
}
