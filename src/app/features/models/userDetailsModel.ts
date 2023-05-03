import {Role} from "../../core/enums/role";
import {Guid} from "guid-typescript";
export class UserDetailsModel{
  public id: Guid;
  public firstName : String;
  public lastName : String;
  public email : String;
  public phoneNumber : String;
  public team: String;
  public birthDate : String;
  public certified : boolean;
  public role: Role;
  public accountApproved: boolean;

}
