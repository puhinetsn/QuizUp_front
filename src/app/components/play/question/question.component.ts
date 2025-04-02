import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-question',
  imports: [MatProgressBarModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent {}
