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
  emailForm: FormGroup;
  email: string = '';

  constructor( private fb: FormBuilder, private userService: UserService, private router: Router, private authService: AuthenticationService, private snackBar: SnackBarComponent, private dialogRef: MatDialogRef<ChangePasswordComponent>) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.emailForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    this.email = this.emailForm.value.email;
    this.userService.changePasswordRequest(this.email).subscribe((data) => {
      if (data) {
        this.openSuccessfulChangePasswordSnackBar();
        this.dialogRef.close();
      } else {
        this.openFailedChangePasswordSnackBar();
      }
    });
  }
  openSuccessfulChangePasswordSnackBar() {
    this.snackBar.openSnackBar("Please verify your email", "Close");
  }
  openFailedChangePasswordSnackBar() {
    this.snackBar.openSnackBar("Invalid email", "Close");
  }
  redirectToLogin() {
    this.router.navigate(['login']);
  }
}
