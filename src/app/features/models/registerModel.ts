import {Gender} from "../../core/enums/gender";
import {Role} from "../../core/enums/role";

export class RegisterModel{
  public firstName : string;
  public lastName : string;
  public birthdate: string | null;
  public gender: Gender;
  public team: string;
  public email : string;
  public password : string;
  public confirmPassword : string;
  public role: Role;
}
