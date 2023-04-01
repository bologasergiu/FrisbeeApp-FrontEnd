export enum Gender {
  Male=1,
  Female=2
}

export const GenderMapping: Record<Gender, string> = {
  [Gender.Male]:"Male",
  [Gender.Female]:"Female"
}

