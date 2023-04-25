import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {TeamModel} from "../../features/models/teamModel";
import {Observable} from "rxjs";
import {Guid} from "guid-typescript";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient ) { }

  // API calls
  addNewTeam(teamName: string){
    console.log(teamName)
    return this.http.post(this.baseUrl + '/api/admin/add-team/'+ teamName, teamName);
  }
  deleteUser(id: Guid){
    return this.http.put(this.baseUrl + '/api/admin/delete-user', id);
  }
  getTeams(): Observable<TeamModel[]> {
    return this.http.get<TeamModel[]>(this.baseUrl + '/api/admin/get-all-teams');
  }
  deleteTeam(teamName: string){
    return this.http.put(this.baseUrl + '/api/admin/delete-team/'+ teamName, teamName);
  }
}
