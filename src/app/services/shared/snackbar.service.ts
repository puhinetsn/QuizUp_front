import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  private _snackbar = inject(MatSnackBar);

  private durationInSeconds = 3;

  public openSnackbar(text: string) {
    this._snackbar.open(text, '', {
      duration: this.durationInSeconds * 1000,
      panelClass: ['quiz-snackbar'],
    });
  }
}
