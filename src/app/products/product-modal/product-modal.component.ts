import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  Inject,
} from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ProductI } from "../../models/product.interface";
import { MatButtonModule } from "@angular/material/button";
import { Store } from "@ngrx/store";
import {
  addToCart,
  markProductInCart,
} from "../../store/actions/products.action";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-modal",
  standalone: false,
  templateUrl: "./product-modal.component.html",
  styleUrl: "./product-modal.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductModalComponent {
  product: ProductI;
  data = inject(MAT_DIALOG_DATA);
  store = inject(Store);
  dialogRef = inject(MatDialogRef<ProductModalComponent>);

  constructor(private cd: ChangeDetectorRef, public router: Router) {
    this.product = this.data;
    if (this.product) {
      this.cd.markForCheck();
    }
  }
  closeModal() {
    this.dialogRef.close();
  }
  addToCarts(product: ProductI) {
    this.dialogRef.close(product);
    this.store.dispatch(addToCart({ product }));
    this.store.dispatch(markProductInCart({ id: product.id }));
  }
}
