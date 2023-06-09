import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {UserModel} from "../../../features/models/userModel";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isOnLoginPage: boolean = true;
  user: UserModel;

  constructor(private router: Router, private authService: AuthenticationService) {
    this.authService.user.subscribe(x => this.user = x);
  }

  ngOnInit(): void {
  }

  goToRegister() {
    this.isOnLoginPage = false;
    this.router.navigate(['register']);
  }

  goToLogin() {
    this.isOnLoginPage = true;
    this.router.navigate(['login']);
  }

  goToLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }

  isLoggedIn(): boolean {
    return localStorage.getItem("token") != undefined;
  }

  isAdmin(): boolean {
    return this.authService.getRole() == "Admin";
  }
   isPlayer(): boolean {
    return this.authService.getRole() == "Player";
  }
  isCoach(): boolean {
    return this.authService.getRole() == "Coach";
  }
  redirectToTeamManagement() {
    this.router.navigate(['/teams-management']);
  }
  redirectToTimeOffRequest() {
    this.router.navigate(['/player-time-off-request']);
  }

  redirectToTrainings() {
    this.router.navigate(['/player-trainings']);
  }
  redirectToUsersManagement() {
    this.router.navigate(['/users-management']);
  }
  redirectToUserDetails() {
    this.router.navigate(['/user']);
  }

  redirectToCoachTimeOffRequest(){
    this.router.navigate(['/coach-time-off-request'])
  }

  redirectToCoachTrainings(){
    this.router.navigate(['/coach-trainings'])
  }
}
