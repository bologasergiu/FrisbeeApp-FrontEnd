import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { EditUserModel } from '../../../features/models/editUserModel';
import { Gender, GenderMapping } from '../../enums/gender';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { SnackBarComponent } from '../../../features/components/snack-bar/snack-bar.component';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  editUserForm: FormGroup;
  genders = Object.values(Gender).filter((value) => typeof value === 'number');
  genderMapping = GenderMapping;
  email: string;
  editUserModel: EditUserModel = new EditUserModel();

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private authService: AuthenticationService, private snackBar: SnackBarComponent) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.email = this.authService.getUserEmail();
    this.authService.getUserDetails(this.email).subscribe(
      (user) => {
        this.editUserForm = this.fb.group({
          firstName: [user.firstName || '', [Validators.pattern('^[a-zA-Z ]*$')]],
          lastName: [user.lastName || '', [Validators.pattern('^[a-zA-Z ]*$')]],
          birthDate: [user.birthDate || null],
          gender: [user.gender || null],
          email: [user.email || '', [Validators.email]],
          phoneNumber: [user.phoneNumber || '', [Validators.pattern('^[0-9]*$')]],
        });

      },
      (error) => {
        console.log(error);
        // Initialize the form with default values
        this.editUserForm = this.fb.group({
          firstName: ['', [Validators.pattern('^[a-zA-Z ]*$')]],
          lastName: ['', [Validators.pattern('^[a-zA-Z ]*$')]],
          birthDate: [''],
          gender: [''],
          email: ['', [Validators.email]],
          phoneNumber: ['', [Validators.pattern('^[0-9]*$')]],
        });
      }
    );
  }


  onSubmit() {
    if (this.editUserForm) {
      this.editUserModel = this.editUserForm.value;
      this.userService.editUser(this.email, this.editUserModel).subscribe(
        (response: any) => {
          if (response == true) {
            this.redirectToUser();
            this.reloadPage();
            this.snackBar.openSnackBar('Your account has been successfully updated!', '');
          } else {
            this.openFailedRegisterSnackBar();

          }
        },
        (error) => {
          console.log(error);
          this.openFailedRegisterSnackBar();
        }
      );
    }
  }

  redirectToUser() {
    this.router.navigate(['user']);
  }

  openFailedRegisterSnackBar() {
    this.snackBar.openSnackBar('Your account could not be updated!', '');
  }

  reloadPage() {
    window.location.reload();
  }
}
