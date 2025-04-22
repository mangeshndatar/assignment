import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductI } from '../models/product.interface';
import * as Selectors from '../store/selectors/products.selector';
import * as ProductsAction from '../store/actions/products.action';

@Component({
  selector: 'app-view-cart',
  standalone: false,
  templateUrl: './view-cart.component.html',
  styleUrl: './view-cart.component.scss',
})
export class ViewCartComponent implements OnInit {
  products$: Observable<ProductI[]>;
  products!: ProductI[];
  constructor(private store: Store) {
    this.products$ = this.store.select(Selectors.viewCart);
    this.products$.subscribe((prod: ProductI[]) => {
      this.products = prod;
      console.log(this.products);
    });
  }
  ngOnInit(): void {
    this.store.dispatch(ProductsAction.productsOnCart());
  }
}
