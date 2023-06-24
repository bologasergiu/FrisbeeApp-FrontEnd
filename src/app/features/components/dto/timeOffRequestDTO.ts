import {RequestType} from "../../../core/enums/requestType";
import {Guid} from "guid-typescript";
import {RequestStatus} from "../../../core/enums/requestStatus";

export class TimeOffRequestDTO
{
  id: Guid;
  userName: String;
  userEmail: String;
  teamName: String;
  startDate: Date;
  endDate: Date;
  status: RequestStatus;
  requestType : RequestType;

}
