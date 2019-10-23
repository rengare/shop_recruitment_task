import { ProductStore } from '@app/modules/home/products/state/product.store';
import { ProductQuery } from '@app/modules/home/products/state/product.query';
import { ProductService } from '@app/modules/home/products/state/product.service';

export * from './product.query';
export * from './product.store';
export * from './product.service';
export * from './product.model';

export const ProductProviders = [
    ProductStore,
    ProductQuery,
    ProductService
]