import {Gender} from "../../core/enums/gender";
import {Role} from "../../core/enums/role";

export class RegisterModel{
  public firstName : String;
  public lastName : String;
  public birthdate: String;
  public email : String;
  public gender: Gender;
  public team: String;
  public password : String;
  public confirmPassword : String;
  public role: Role;
}
