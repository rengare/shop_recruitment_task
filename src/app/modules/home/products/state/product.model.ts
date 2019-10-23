import { ID } from '@datorama/akita';

export interface Product {
  id: ID;
  title: string;
  description: string;
  price: number;
  image: string;
}

export function createProduct(params: Partial<Product>) {
  return {
  } as Product;
}
