interface IDataRow {
  _id?: string | null | undefined,
  name?: string | null | undefined,
  phone_number?: string | null | undefined
  description?: string | null | undefined
}

export type DataRow  = IDataRow