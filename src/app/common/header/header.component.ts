import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Observable } from "rxjs";
import { ProductI } from "../../models/product.interface";
import { Store } from "@ngrx/store";
import * as Selectors from "../../store/selectors/products.selector";
import * as ProductsAction from "../../store/actions/products.action";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
  standalone: false,
})
export class HeaderComponent implements OnInit {
  @Output() inputHandler = new EventEmitter();
  products$: Observable<ProductI[]>;
  count = 0;
  inputText = "";

  constructor(private store: Store) {
    this.products$ = this.store.select(Selectors.viewCart);
    this.products$.subscribe((prod: ProductI[]) => {
      console.log(this.count);
    });
  }
  ngOnInit(): void {
    this.store.dispatch(ProductsAction.productsOnCart());
  }
  searchHandler(inputText: string) {
    this.inputHandler.next(inputText);
  }
}
