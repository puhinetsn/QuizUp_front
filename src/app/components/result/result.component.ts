import { Component } from '@angular/core';
import { QuestionResultComponent } from './question-result/question-result.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-result',
  imports: [QuestionResultComponent, MatButtonModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss',
})
export class ResultComponent {}
