import {Role} from "../../core/enums/role";
export class UserDetailsModel{
  public firstName : String;
  public lastName : String;
  public email : String;
  public phoneNumber : String;
  public team: String;
  public birthDate : String;
  public certified : boolean;
  public role: Role;
}
