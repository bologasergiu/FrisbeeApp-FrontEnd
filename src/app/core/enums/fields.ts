export enum Fields {

  BazaSportiva1 = 1,
  BazaSportiva2 =2,
  SalaUVT = 3,
BazaUBB = 4,
  BazaUTCN = 5,
  PoliBucuresti = 6,
  PoliIasi = 7,
  Transivania = 8,
  BazaNegresti = 9,
  Brasov =10

}

export const FieldsMapping: Record<Fields, string> = {
  [Fields.BazaSportiva1]:"BazaSportiva1",
  [Fields.BazaSportiva2]:"BazaSportiva2",
  [Fields.SalaUVT]:"SalaUVT",
  [Fields.BazaUBB]:"BazaUBB",
  [Fields.BazaUTCN]:"BazaUTCN",
  [Fields.PoliIasi]:"PoliIasi",
  [Fields.Transivania]:"Transivania",
  [Fields.BazaNegresti]:"BazaNegresti",
  [Fields.Brasov]:"Brasov",
  [Fields.PoliBucuresti]:"PoliBucuresti",

}

