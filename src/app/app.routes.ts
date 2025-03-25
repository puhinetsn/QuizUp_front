import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PlayComponent } from './components/play/play.component';
import { ResultComponent } from './components/result/result.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'play',
    component: PlayComponent,
  },
  {
    path: 'result',
    component: ResultComponent,
  },
];
