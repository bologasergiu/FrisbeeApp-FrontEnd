import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../../../core/services/admin.service";
import {SnackBarComponent} from "../../snack-bar/snack-bar.component";
import {Guid} from "guid-typescript";
import {ConfirmationDialogComponent} from "../../../../core/utils/confirmation-dialog/confirmation-dialog.component";
import {DeleteuserDialogComponent} from "../../../../core/utils/deleteuser-dialog/deleteuser-dialog.component";

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  email: string;
  deleteUserFormGroup: FormGroup;
  constructor(private adminService : AdminService, private snackbar: SnackBarComponent, private dialog: DeleteuserDialogComponent) { }

  ngOnInit() {
    this.initForm()
  }
  initForm(){
    this.deleteUserFormGroup = new FormGroup({
      'id': new FormControl(null, [Validators.required]),
    });
  }

  deleteUser(email: string){
    this.adminService.deleteUser(email).subscribe(() => {
      this.snackbar.openSnackBar("User deleted successfully.", '');
    });
  }
}


