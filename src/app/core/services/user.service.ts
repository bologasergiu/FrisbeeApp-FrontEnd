import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Guid} from "guid-typescript";
import {EditUserModel} from "../../features/models/editUserModel";
import {ChangePasswordModel} from "../../features/models/changePasswordModel";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  editUser(email: string, editUserModel: EditUserModel){
    return this.http.put<boolean>(`${this.baseUrl}/api/user/update-user/${email}`, editUserModel);
  }

  changePassword(changePasswordModel: ChangePasswordModel){
    return this.http.put<boolean>(`${this.baseUrl}/api/user/change-password`, changePasswordModel);
  }
}
