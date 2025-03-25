import { Component } from '@angular/core';
import { QuizComponent } from './quiz/quiz.component';
import { questions } from '../../questions';

@Component({
  selector: 'app-quizes',
  imports: [QuizComponent],
  templateUrl: './quizes.component.html',
  styleUrl: './quizes.component.scss',
})
export class QuizesComponent {
  quizes: {
    category: string;
    questions: (typeof questions)[0][];
  }[] = [];

  constructor() {
    //   const quizesMap = new Map<string, (typeof questions)[0][]>();
    //   questions.forEach((q) => {
    //     const categoryQuestions = quizesMap.get(q.category);
    //     if (!categoryQuestions) {
    //       quizesMap.set(q.category, [q]);
    //     } else {
    //       categoryQuestions.push(q);
    //     }
    //   });
    //   this.quizes = Array.from(quizesMap.entries()).map((e) => ({
    //     category: e[0],
    //     questions: e[1],
    //   }));
  }
}
