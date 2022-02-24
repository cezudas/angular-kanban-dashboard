import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Board } from '../board.model';

@Component({
  selector: 'vantage-board-dialog',
  templateUrl: './board-dialog.component.html',
  styles: [
  ]
})
export class BoardDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<BoardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Board
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
