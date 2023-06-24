import {Component, Input, OnInit, Pipe} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {UserDetailsModel} from "../../../features/models/userDetailsModel";
import {MatDialog} from "@angular/material/dialog";
import {EditUserComponent} from "../edit-user/edit-user.component";
import {RoleMapping} from "../../enums/role";
import {GenderMapping} from "../../enums/gender";
import {Router} from "@angular/router";
import {ChangePasswordComponent} from "../change-password/change-password.component";

@Component({
  selector: 'app-user-details',
  templateUrl: 'user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{

  userDetails: UserDetailsModel;
  genderMapping = GenderMapping;

  constructor(private authService: AuthenticationService, private dialog: MatDialog) { }

  ngOnInit() {
    let email = this.authService.getUserEmail()
    this.authService.getUserDetails(email).subscribe(
      userDetails => this.userDetails = userDetails,
      error => console.error(error)

    );
  };

  onEditUser() {
    const dialogRef = this.dialog.open(EditUserComponent, {
      width: '500px',

    });
    dialogRef.componentInstance.userDetails = this.userDetails;
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  changePassword() {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      width: '500px',
      data: { userDetails: this.userDetails }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  getRole() {
    return this.authService.getRole();
  }

  getBirthdate(date: string) {

    return new Date(date)
  }
}
