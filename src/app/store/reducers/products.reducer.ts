import { createReducer, on } from '@ngrx/store';
import * as ProductActions from '../actions/products.action';
import { ProductI } from '../../models/product.interface';

export interface ProductsState {
  products: ProductI[];
  loading: boolean;
  error: any;
  searchQuery: string;
  categoryFilter: string | null;
  priceRange: [number, number] | null; // [min, max]
}

export const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
  searchQuery: '',
  categoryFilter: null,
  priceRange: null,
};

export const productsReducer = createReducer(
  initialState,
  on(ProductActions.loadProducts, (state) => ({
    ...state,
    loading: true,
  })),
  on(ProductActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false,
  })),
  on(ProductActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(ProductActions.markProductInCart, (state, { id }) => ({
    ...state,
    products: state.products.map((product) =>
      product.id === id ? { ...product, inCart: true } : product
    ),
  })),
  on(ProductActions.productsOnCart, (state) => ({
    ...state,
    products: state.products.map((product) =>
      product.inCart === true ? { ...product } : product
    ),
  })),
  on(ProductActions.searchProducts, (state, { query }) => ({
    ...state,
    searchQuery: query.toLowerCase(),
  })),
  on(ProductActions.filterByCategory, (state, { category }) => ({
    ...state,
    categoryFilter: category,
  })),

  on(ProductActions.filterByPriceRange, (state, { range }) => ({
    ...state,
    priceRange: range,
  }))
);
