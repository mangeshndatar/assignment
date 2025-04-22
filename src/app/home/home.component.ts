import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import * as Selectors from "../store/selectors/products.selector";
import * as ProductsAction from "../store/actions/products.action";
import { ProductI } from "../models/product.interface";

@Component({
  selector: "app-home",
  standalone: false,
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit {
  products$: Observable<ProductI[]>;
  filteredProducts$: Observable<ProductI[]>;
  products!: ProductI[];
  availableProducts$: Observable<ProductI[]>;

  constructor(private store: Store) {
    // All Products at initial state
    this.products$ = this.store.select(Selectors.selectAllProducts);
    this.products$.subscribe((prods: ProductI[]) => {
      this.products = prods;
      console.log(this.products);
    });

    // Filtered Product Store update
    this.filteredProducts$ = this.store.select(
      Selectors.selectFilteredProducts
    );
    this.filteredProducts$.subscribe((prods: ProductI[]) => {
      this.products = prods;
    });

    // Available Products after Adding to Cart
    this.availableProducts$ = this.store.select(
      Selectors.selectAvailableProducts
    );
    this.availableProducts$.subscribe((prods: ProductI[]) => {
      this.products = prods;
    });
  }
  ngOnInit(): void {
    if (this.products?.length == 0) {
      this.store.dispatch(ProductsAction.loadProducts());
    }
  }
}
