import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { SnackBarComponent } from '../../../features/components/snack-bar/snack-bar.component';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  newPasswordForm: FormGroup;
  hidePassword = true;
  email: string;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private authService: AuthenticationService,
    private snackBar: SnackBarComponent
  ) {}

  ngOnInit() {
    this.parseEmailFromUrl();
    this.initForm();
  }

  parseEmailFromUrl() {
    this.route.queryParams.subscribe(params => {
      this.email = decodeURIComponent(params['email']);
      debugger
    });
  }

  initForm() {
    this.newPasswordForm = this.fb.group({
      email: [{ value: this.email, disabled: true }, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#=+\';:_,.?!@$%^&*-]).{10,}$')]],
      confirmPassword: [null, [Validators.required]]
    });
  }

  onSubmit() {
    if (this.newPasswordForm.valid) {
      const changePasswordModel = {
        ...this.newPasswordForm.value,
        email: this.email
      };

      this.userService.changePassword(changePasswordModel).subscribe(
        (response: any) => {
          if (response === true) {
            this.openSuccessfulChangePasswordSnackBar();
            this.authService.logout();
            this.redirectToLogin();
          } else {
            this.openFailedChangePasswordSnackBar();
          }
        }
      );
    }
  }


  openSuccessfulChangePasswordSnackBar() {
    this.snackBar.openSnackBar('Password changed successfully!', 'Close');
  }

  openFailedChangePasswordSnackBar() {
    this.snackBar.openSnackBar('Password change failed!', 'Close');
  }

  redirectToLogin() {
    this.router.navigate(['login']);
  }
}
