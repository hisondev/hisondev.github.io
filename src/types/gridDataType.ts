export type methodGridRow = {
  method: string
  param: string
  return: string
  explain: string
}

export type methodNoteGridRow = {
  method: string
  param: string
  return: string
  explain: string
  note: string
}

export type propGridRow = {
  prop: string
  type: string
  default: string
  explain: string
}

export type configPropGridRow = {
  prop: string
  default: string
  explain: string
  note: string
}

export type propSimpleGridRow = {
  prop: string
  explain: string
}

export type propJavaGridRow = {
  field: string
  default: string
  explain: string
  note: string
}