import { Component, Optional, Inject,OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit{
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: {teamName: String}) { }

  ngOnInit(): void {
    debugger
  }

  onAction() {
    this.dialogRef.close({ status: this.data.teamName });
  }

  closeDialog() {
    this.dialogRef.close({ status: 'closed' });
  }
}
