import {HttpClient} from '@angular/common/http';
import {RegisterModel} from '../../features/models/registerModel';
import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from 'rxjs';
import {LoginModel} from "../../features/models/loginModel";
import {TokenModel} from "../../features/models/tokenModel";
@Injectable({providedIn: 'root'})

export class AuthenticationService{
  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {
  }
  register(user: RegisterModel): Observable<boolean>{
    return this.http.post<boolean>(this.baseUrl + '/api/user/register', user);
  }

  login(user: LoginModel): Observable<TokenModel> {
    localStorage.removeItem('token');
    debugger
    let response = this.http.post<TokenModel>(environment.baseUrl + '/api/user/login', user);
    response.subscribe((response: TokenModel) => {
      if(response!=null) {
        localStorage.setItem('token', JSON.stringify({token: response.token}));
      }
    });
    return response;
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
}

