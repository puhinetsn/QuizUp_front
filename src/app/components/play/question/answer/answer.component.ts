import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

export enum AnswerStatus {
  BASIC,
  SELECTED,
  RIGHT,
  WRONG,
}

@Component({
  selector: 'app-answer',
  imports: [MatRadioModule, FormsModule],
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.scss',
})
export class AnswerComponent {
  answers: string[] = ['Georgia', 'California', 'New York', 'Texas'];
}
