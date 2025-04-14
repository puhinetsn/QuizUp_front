import { Component, input } from '@angular/core';
import { Question } from '../../../models/quiz.model';
import { AnswerStatus } from '../../play/question/answer/answer.component';

@Component({
  selector: 'app-question-result',
  imports: [],
  templateUrl: './question-result.component.html',
  styleUrl: './question-result.component.scss',
})
export class QuestionResultComponent {
  question = input.required<Question>();
  answer = input.required<string>();
  answerStatus = input.required<AnswerStatus>();

  status = AnswerStatus;
}
