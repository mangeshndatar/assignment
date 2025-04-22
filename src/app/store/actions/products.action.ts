import { createAction, props } from '@ngrx/store';
import { ProductI } from '../../models/product.interface';

export const loadProducts = createAction('[Products] Load Products');
export const loadProductsSuccess = createAction(
  '[Products] Load Products Success',
  props<{ products: ProductI[] }>()
);
export const loadProductsFailure = createAction(
  '[Products] Load Products Failure',
  props<{ error: any }>()
);

export const addToCart = createAction(
  '[Products] Add to Cart',
  props<{ product: ProductI }>()
);
export const markProductInCart = createAction(
  '[Products] Mark Product In Cart',
  props<{ id: number }>()
);
export const productsOnCart = createAction('[Products] Add to Cart');
export const searchProducts = createAction(
  '[Products] Search',
  props<{ query: string }>()
);

export const filterByCategory = createAction(
  '[Products] Filter By Category',
  props<{ category: string | null }>()
);

export const filterByPriceRange = createAction(
  '[Products] Filter By Price Range',
  props<{ range: [number, number] | null }>()
);
