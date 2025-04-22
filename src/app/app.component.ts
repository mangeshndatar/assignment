import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Observable } from "rxjs";
import { ProductI } from "./models/product.interface";
import { Store } from "@ngrx/store";
import * as Selectors from "./store/selectors/products.selector";
import * as ProductsAction from "./store/actions/products.action";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  standalone: false,
})
export class AppComponent {
  constructor(private store: Store) {}
  searchBar(query: string) {
    this.store.dispatch(ProductsAction.searchProducts({ query }));
  }
}
