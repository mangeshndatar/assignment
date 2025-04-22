import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from '../reducers/products.reducer';

export const selectProductsState =
  createFeatureSelector<ProductsState>('products');

export const selectAllProducts = createSelector(
  selectProductsState,
  (state) => state.products
);

export const selectLoading = createSelector(
  selectProductsState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectProductsState,
  (state) => state.error
);

export const selectAvailableProducts = createSelector(
  selectAllProducts,
  (products) => products.filter((product) => !product.inCart)
);
export const viewCart = createSelector(selectAllProducts, (products) =>
  products.filter((product) => product.inCart)
);

export const selectSearchQuery = createSelector(
  selectProductsState,
  (state) => state.searchQuery
);

export const selectCategoryFilter = createSelector(
  selectProductsState,
  (state) => state.categoryFilter
);

export const selectPriceRange = createSelector(
  selectProductsState,
  (state) => state.priceRange
);

export const selectFilteredProducts = createSelector(
  selectAllProducts,
  selectSearchQuery,
  selectCategoryFilter,
  selectPriceRange,
  (products, query, category, priceRange) => {
    return products.filter((product) => {
      const matchesSearch =
        !query ||
        product.title.toLowerCase().includes(query) ||
        product.name.toLowerCase().includes(query);

      const matchesCategory = !category || product.category === category;

      const matchesPrice =
        !priceRange ||
        (product.price >= priceRange[0] && product.price <= priceRange[1]);

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }
);
