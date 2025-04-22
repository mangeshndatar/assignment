import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import * as Actions from "../../store/actions/products.action";

@Component({
  selector: "app-filter",
  standalone: false,
  templateUrl: "./filter.component.html",
  styleUrl: "./filter.component.scss",
})
export class FilterComponent {
  constructor(private store: Store) {}
  filterByCategory(cat: any) {
    const category = cat.target.value;
    this.store.dispatch(Actions.filterByCategory({ category }));
  }

  filterByPrice(event: any) {
    const value = event.target.value;
    let minPrice,
      maxPrice = 0;
    if (value) {
      minPrice = value.split(",")[0];
      maxPrice = value.split(",")[1];
    }
    const myRange: [number, number] = [minPrice, maxPrice];
    this.store.dispatch(Actions.filterByPriceRange({ range: myRange }));
  }
}
