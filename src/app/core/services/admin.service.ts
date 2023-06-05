import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {TeamModel} from "../../features/models/teamModel";
import {Observable} from "rxjs";
import {UserDetailsModel} from "../../features/models/userDetailsModel";
import {map} from "rxjs/operators";
import {Guid} from "guid-typescript";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient ) { }

  // API calls
  addNewTeam(teamName: string){
    return this.http.post(this.baseUrl + '/api/admin/add-team/'+ teamName, teamName);
  }
  deleteUser(email: string){
    return this.http.put(this.baseUrl + '/api/admin/delete-user/'+email, email);
  }
  getTeams(): Observable<TeamModel[]> {
    return this.http.get<TeamModel[]>(this.baseUrl + '/api/admin/get-all-teams');
  }

  getTeam(): Observable<TeamModel>{
    return this.http.get<TeamModel>(this.baseUrl + '/api/admin/get-team');
  }
  deleteTeam(teamName: string){
    return this.http.put(this.baseUrl + '/api/admin/delete-team/'+ teamName, teamName);
  }

  getUsers(): Observable<UserDetailsModel[]> {
    return this.http.get<UserDetailsModel[]>(this.baseUrl + '/api/admin/get-all-users').pipe(map(data=>{
      return data;
    }));
  }
  approveAccount(id: Guid){
    return this.http.put(this.baseUrl + '/api/user/approve-account/'+ id, id);
  }

  getTeamMembers(teamName: string): Observable<UserDetailsModel[]> {
    return this.http.get<UserDetailsModel[]>(this.baseUrl + '/api/User/view-team/'+teamName).pipe(map(data=>{
      return data;
    }));
  }

  getNumberOfPlayers(teamName: string): Observable<number> {
    return this.http.get<number>(this.baseUrl + '/api/Admin/get-team-members-count/' +teamName);
  }
}
