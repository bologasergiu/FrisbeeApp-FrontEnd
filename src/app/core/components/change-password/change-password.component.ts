import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ChangePasswordModel} from "../../../features/models/changePasswordModel";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {SnackBarComponent} from "../../../features/components/snack-bar/snack-bar.component";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  changePasswordModel: ChangePasswordModel = new ChangePasswordModel();
  hidePassword = true;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private authService: AuthenticationService, private snackBar: SnackBarComponent, private dialogRef: MatDialogRef<ChangePasswordComponent>) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.changePasswordForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#=+\';:_,.?!@$%^&*-]).{10,}$')],],
      confirmPassword: [null, [Validators.required]]
    });
  }

  onSubmit() {
    if (this.changePasswordForm) {
      this.changePasswordModel = this.changePasswordForm.value;
      this.userService.changePassword(this.changePasswordModel).subscribe(
        (response: any) => {
          if (response == true) {
            this.openSuccessfulChangePasswordSnackBar();
            this.authService.logout();
            this.redirectToLogin();
            this.dialogRef.close();
          } else {
            this.openFailedChangePasswordSnackBar();
          }
        }
      );
    }
  }
  openSuccessfulChangePasswordSnackBar() {
    this.snackBar.openSnackBar("Password changed successfully!", "Close");
  }
  openFailedChangePasswordSnackBar() {
    this.snackBar.openSnackBar("Password change failed!", "Close");
  }


  redirectToLogin() {
    this.router.navigate(['login']);
  }
}
