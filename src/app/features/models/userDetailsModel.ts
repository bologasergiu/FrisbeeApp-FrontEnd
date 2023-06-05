import {Role} from "../../core/enums/role";
import {Guid} from "guid-typescript";
import {Gender} from "../../core/enums/gender";
export class UserDetailsModel{
  public id: Guid;
  public firstName : String;
  public lastName : String;
  public email : String;
  public phoneNumber : String;
  public team: String;
  public birthDate : string;
  public certified : boolean;
  public role: Role;
  public gender: Gender;
  public accountApproved: boolean;

}
