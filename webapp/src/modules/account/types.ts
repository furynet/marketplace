export type Account = {
  id: string
  address: string
  nftIds: string[]
}

export type AccountMetrics = {
  address: string
  sales: number
  purchases: number
  spent: string
  earned: string
  royalties: string
}

export type CreatorAccount = {
  name: string
  address: string
  collections: number
}
