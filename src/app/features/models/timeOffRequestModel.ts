import {RequestType} from "../../core/enums/requestType";
import {Guid} from "guid-typescript";

export class TimeOffRequestModel
{
  id: Guid;
  userName: string;
  startDate: Date;
  endDate: Date;
  type : RequestType

}
