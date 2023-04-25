import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../../../core/services/admin.service";
import {SnackBarComponent} from "../../snack-bar/snack-bar.component";
import {Guid} from "guid-typescript";

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  id : Guid;
  deleteUserFormGroup: FormGroup;
  constructor(private adminService : AdminService, private snackbar: SnackBarComponent) { }

  ngOnInit() {
    this.initForm()
  }
  initForm(){
    this.deleteUserFormGroup = new FormGroup({
      'id': new FormControl(null, [Validators.required]),
    });
  }

  deleteUser(){
    this.id = this.deleteUserFormGroup.value;
    this.adminService.deleteUser(this.id).subscribe((response: any) => {
      if (response != null) {
        this.snackbar.openSnackBar("Team added successfully", '');
      }
      else {
        this.snackbar.openSnackBar("Team was not added",'');
      }
    });
  }
}


