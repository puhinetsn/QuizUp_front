import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/categories.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private http = inject(HttpClient);
  private expressUrl = 'http://localhost:3000/api';

  public getCategories(): Observable<Category> {
    return this.http.get<Category>(`${this.expressUrl}/categories`);
  }
}
