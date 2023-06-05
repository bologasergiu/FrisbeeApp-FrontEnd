export enum RequestType{
  Vacation=1,
  PersonalLeave=2,
  MedicalLeave=3,
  FamilyReason=4
}

export const TypeMapping: Record<RequestType, string> = {
  [RequestType.Vacation]:"Vacation",
  [RequestType.PersonalLeave]:"Personal Leave",
  [RequestType.MedicalLeave]:"Medical Leave",
  [RequestType.FamilyReason]:"Family Leave"
}
