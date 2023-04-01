export enum Role{
  "Player" =1,
  "Coach" =2
}
export const RoleMapping: Record<Role, string> = {

  [Role.Player]:"Player",
  [Role.Coach]:"Coach"
}
