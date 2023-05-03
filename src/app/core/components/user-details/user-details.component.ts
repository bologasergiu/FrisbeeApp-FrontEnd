import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {UserDetailsModel} from "../../../features/models/userDetailsModel";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  userDetails: UserDetailsModel = new UserDetailsModel();
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    let email = this.authService.getUserEmail()
    this.authService.getUserDetails(email).subscribe(
      userDetails => this.userDetails = userDetails,
      error => console.error(error)
    );
  };

}
