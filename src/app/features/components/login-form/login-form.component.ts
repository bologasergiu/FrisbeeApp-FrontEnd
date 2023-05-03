import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginModel} from "../../models/loginModel";
import {AuthenticationService} from "../../../core/services/authentication.service";
import {SnackBarComponent} from "../snack-bar/snack-bar.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{
  loginForm: FormGroup
  loginModel:LoginModel
  hidePassword = true;
  role: string
  email: string

  constructor(private authService: AuthenticationService, private snackBar: SnackBarComponent, private router: Router) {
  }
  ngOnInit():void {
    this.initForm();
  }
  initForm(){
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#=+';:_,.?!@$%^&*-]).{10,}$")])
    });
  }
  onSubmit(){
    this.loginModel = this.loginForm.value;
    this.authService.login(this.loginModel).subscribe((response: any) => {
      if (response != null) {
        this.redirectToUserDetails();
      }
      else {
        this.openFailedLoginSnackBar();
      }
    });
  }
  redirectToPageBasedOnRole() {
    this.role = this.authService.getRole().toString();
    if (this.role === 'Admin') {
      this.router.navigate(['/admin']);
    }
    else if (this.role === 'Coach') {
      this.router.navigate(['/coach']);
    }
    else if (this.role === 'Player') {
      this.router.navigate(['/player']);
    }
  }

  redirectToUserDetails(){
    this.router.navigate(['/user']);
  }
  openFailedLoginSnackBar(){
    this.snackBar.openSnackBar('Failed login attempt!','');
  }
  usersEmail(){
    this.email = this.loginForm.value.email;
  }
}
