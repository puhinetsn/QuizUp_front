import { Category } from './categories.model';

export interface Question {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface Quiz {
  _id: string;
  category: string;
  url: string;
  quiz: Question[];
}
