import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {TimeOffRequestModel} from "../../features/models/timeOffRequestModel";
import {Observable} from "rxjs";
import {TrainingModel} from "../../features/models/trainingModel";
import {TimeOffRequestDTO} from "../../features/components/dto/timeOffRequestDTO";
import {Guid} from "guid-typescript";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  registerRequest(requestModel: TimeOffRequestModel) : Observable<boolean>{
    return this.http.post<boolean>(this.baseUrl + '/api/player/add-time-off-request/', requestModel);
  }

  getTrainings() : Observable<TrainingModel[]>{
    return this.http.get<TrainingModel[]>(this.baseUrl + '/api/player/get-trainings/');
  }

  getMyTimeOffRequests() : Observable<TimeOffRequestDTO[]>{
    return this.http.get<TimeOffRequestDTO[]>(this.baseUrl + '/api/player/view-all-timeoff-requests');
  }
  deleteTimeOffRequest(requestId: Guid) : Observable<boolean>{
    return this.http.put<boolean>(this.baseUrl + '/api/player/delete-timeoff-request/'+requestId, requestId);
  }

}
