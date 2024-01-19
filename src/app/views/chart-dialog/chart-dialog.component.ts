import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-chart-dialog',
  templateUrl: './chart-dialog.component.html',
  styleUrls: ['./chart-dialog.component.scss']
})
export class ChartDialogComponent {
  constructor(public dialogRef: MatDialogRef<ChartDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any ){
  }
}
