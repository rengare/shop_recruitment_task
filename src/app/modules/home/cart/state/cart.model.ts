import { ID } from '@datorama/akita';

export interface Cart {
  id: ID;
  title: string;
  description: string;
  price: number;
}

export function createCart(params: Partial<Cart>) {
  return {

  } as Cart;
}
