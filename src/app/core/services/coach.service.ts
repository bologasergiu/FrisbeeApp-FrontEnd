import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TimeOffRequestDTO} from "../../features/components/dto/timeOffRequestDTO";
import {Guid} from "guid-typescript";
import {TrainingModel} from "../../features/models/trainingModel";
import {TeamModel} from "../../features/models/teamModel";

@Injectable({
  providedIn: 'root'
})
export class CoachService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  // API calls
  getTimeOffRequests(): Observable<TimeOffRequestDTO[]> {
    return this.http.get<TimeOffRequestDTO[]>(this.baseUrl + '/api/coach/requests-per-team');
  }

  getTrainings(): Observable<TrainingModel[]> {
    return this.http.get<TrainingModel[]>(this.baseUrl + '/api/coach/get-all-trainings');
  }
  getTeams(): Observable<TeamModel[]> {
    return this.http.get<TeamModel[]>(this.baseUrl + '/api/coach/get-all-teams');
  }

  changeStatus(requestId: Guid, status: string): Observable<boolean> {
    return this.http.put<boolean>(`${this.baseUrl}/api/coach/change-timeoff-request-status?Id=${requestId}&status=${status}`, null);
  }

  addTraining(trainingModel: TrainingModel) : Observable<boolean>{
    return this.http.post<boolean>(this.baseUrl + '/api/coach/add-training/', trainingModel);
  }
  getTrainingsPerTeam(teamName: string): Observable<TrainingModel[]> {
    return this.http.get<TrainingModel[]>(this.baseUrl + '/api/coach/get-trainings-per-team'+ teamName);
  }
}
