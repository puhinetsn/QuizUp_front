import { Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { PlayComponent } from './components/play/play.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'play',
    component: PlayComponent,
  },
];
