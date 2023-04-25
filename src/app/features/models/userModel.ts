import {Gender} from "../../core/enums/gender";
import {Role} from "../../core/enums/role";

export class UserModel{
  public firstName : String;
  public lastName : String;
  public birthdate: String;
  public email : String;
  public gender: Gender;
  public team: String;
  public role: Role;
  public token: String;
}
