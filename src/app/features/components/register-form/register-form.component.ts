import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Gender, GenderMapping} from "../../../core/enums/gender";
import {Role, RoleMapping} from "../../../core/enums/role";
import {RegisterModel} from "../../../features/models/registerModel"
import {AuthenticationService} from "../../../core/services/authentication.service";
import {Router} from "@angular/router";
import {SnackBarComponent} from "../snack-bar/snack-bar.component";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent implements OnInit{
  registerForm: FormGroup;
  genders = Object.values(Gender).filter(value => typeof value === 'number');
  roles = Object.values(Role).filter(value => typeof value === 'number');
  genderMapping = GenderMapping;
  roleMapping = RoleMapping;
  hidePassword = true;
  registerModel: RegisterModel = new RegisterModel();


  constructor(private authenticationService: AuthenticationService, private router: Router , private snackBar: SnackBarComponent) {

  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.registerForm = new FormGroup({
      'firstName': new FormControl(null, [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]),
      'lastName': new FormControl(null, [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]),
      'birthDate': new FormControl(null,Validators.required),
      'gender': new FormControl(null,[Validators.required]),
      'team': new FormControl(null, [Validators.required]),
      'role': new FormControl(null,[Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#=+';:_,.?!@$%^&*-]).{10,}$")]),
      'confirmPassword': new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    this.registerModel = this.registerForm.value;
    this.authenticationService.register(this.registerModel).subscribe((response: any) => {
      if (response == true) {
        this.redirectToLogin();
      }
      else {
        this.openFailedRegisterSnackBar();
      }
    });
  }
  redirectToLogin(){
    this.router.navigate(['login']);
    this.snackBar.openSnackBar('Your account was successfully created!', '');
  }

  openFailedRegisterSnackBar(){
    this.snackBar.openSnackBar('Your account could not be created!','');
  }
}
