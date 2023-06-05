import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {TimeOffRequestModel} from "../../features/models/timeOffRequestModel";
import {Observable} from "rxjs";
import {TrainingModel} from "../../features/models/trainingModel";

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

}
