import {Gender} from "../../core/enums/gender";

export class EditUserModel{
  public firstName : string;
  public lastName : string;
  public birthdate: Date;
  public gender: Gender;
  public phoneNumber: string;
}
