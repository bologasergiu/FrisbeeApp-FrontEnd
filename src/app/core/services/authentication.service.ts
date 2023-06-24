import {HttpClient} from '@angular/common/http';
import {RegisterModel} from '../../features/models/registerModel';
import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {BehaviorSubject, Observable} from 'rxjs';
import {LoginModel} from "../../features/models/loginModel";
import {TokenModel} from "../../features/models/tokenModel";
import {UserModel} from "../../features/models/userModel";
import {Router} from "@angular/router";
import {UserDetailsModel} from "../../features/models/userDetailsModel";
import { map } from 'rxjs/operators';
@Injectable({providedIn: 'root'})

export class AuthenticationService{
  private userSubject: BehaviorSubject<UserModel>;
  public user: Observable<UserModel>;
  public email: string;

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }

  get token(){
    return localStorage.getItem('token')
  }
  register(user: RegisterModel): Observable<boolean>{
    return this.http.post<boolean>(environment.baseUrl + '/api/user/register', user);
  }

  login(user: LoginModel): Observable<TokenModel> {
    localStorage.removeItem('token');
    let response = this.http.post<TokenModel>(environment.baseUrl + '/api/user/login', user);
    response.subscribe((response: TokenModel) => {
      if(response!=null) {
        localStorage.setItem('token', JSON.stringify({token: response.token}));
      }
    });
    return response;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }
  getRole(): string {
    let token = localStorage.getItem('token');
    if (token != null) {
      let jwtData = token.split('.')[1];
      let decodedJwtJsonData = window.atob(jwtData);
      let decodedJwtData = JSON.parse(decodedJwtJsonData);

      return decodedJwtData.role;
    }
    return "Unknown role";
  }
  getUserDetails(email: string): Observable<UserDetailsModel> {
    let response = this.http.get<UserDetailsModel>(environment.baseUrl + '/api/User/user-info/'  + email);
    response.subscribe((response: UserDetailsModel) => {
      if(response!=null) {
        localStorage.setItem('user', JSON.stringify({user: response}));
      }
    });
    return response;
  }
  getUserEmail(): string {
    let token = localStorage.getItem('token');
    if (token != null) {
      let jwtData = token.split('.')[1];
      let decodedJwtJsonData = window.atob(jwtData);
      let decodedJwtData = JSON.parse(decodedJwtJsonData);
      return decodedJwtData.name;
    }
    return "Unknown email";
  }

}

