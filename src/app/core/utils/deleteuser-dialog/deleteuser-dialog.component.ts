import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "../confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-deleteuser-dialog',
  templateUrl: './deleteuser-dialog.component.html',
  styleUrls: ['./deleteuser-dialog.component.css']
})
export class DeleteuserDialogComponent implements OnInit{
  constructor(
    public dialogRef: MatDialogRef<DeleteuserDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: {email: String}) { }

  ngOnInit(): void {
  }

  onAction() {
    this.dialogRef.close({ status: this.data.email });
  }

  closeDialog() {
    this.dialogRef.close({ status: 'closed' });
  }
}
