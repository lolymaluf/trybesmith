export interface NProduct {
  id?: number,
  name: string,
  amount: string,
  orderId?: number,
}

export interface NUser {
  id?: number,
  username: string,
  classe: string,
  level: number,
  password: string,
/*   token?: string, */
}

export interface NOrder {
  id?: number,
  userId: number,
  productsIds: number
}