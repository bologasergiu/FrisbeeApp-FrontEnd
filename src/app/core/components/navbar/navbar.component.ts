import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isOnLoginPage: boolean = true;
  constructor(private router: Router) { }
  goToRegister(){
    this.isOnLoginPage = false;
    this.router.navigate(['register']);
  }
  goToLogin(){
    this.isOnLoginPage = true;
    this.router.navigate(['login']);
  }
  goToLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }

  ngOnInit(): void {
  }
  isLoggedIn(): boolean {
    return localStorage.getItem("token") != undefined;
  }
}
