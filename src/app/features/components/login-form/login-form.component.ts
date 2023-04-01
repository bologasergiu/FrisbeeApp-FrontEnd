import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginModel} from "../../models/loginModel";
import {Role} from "../../../core/enums/role";
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
  player: string = "Player"
  coach: string = "Coach"
  role: Role

  constructor(private authenticationService: AuthenticationService, private snackBar: SnackBarComponent, private router: Router) {
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
    debugger
    this.authenticationService.login(this.loginModel).subscribe((response: any) => {
      if (response != null) {
        this.redirectToViewDataPage();
      }
      else {
        this.openFailedLoginSnackBar();
      }
    });
  }
  redirectToViewDataPage() {

      this.router.navigate(['view-data-page']);

  }
  openFailedLoginSnackBar(){
    this.snackBar.openSnackBar('Failed login attempt!','');
  }
}
