import { Component } from '@angular/core';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './question/answer/answer.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-play',
  imports: [QuestionComponent, AnswerComponent, MatButtonModule],
  templateUrl: './play.component.html',
  styleUrl: './play.component.scss',
  host: {
    class: 'main-layout',
  },
})
export class PlayComponent {}
