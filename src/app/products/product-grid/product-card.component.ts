import {
  Component,
  inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ProductI } from '../../models/product.interface';
import { ProductService } from '../../product.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductModalComponent } from '../product-modal/product-modal.component';
@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent implements OnChanges {
  readonly dialog = inject(MatDialog);
  notificationMsg!: string;
  @Input() products: ProductI[] = [];

  currentPage = 1;
  itemsPerPage = 10;
  paginatedProducts: ProductI[] = [];
  constructor(private productService: ProductService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('products', this.products);
    this.updatePaginatedProducts();
  }
  get totalPages() {
    return Math.ceil(this.products.length / this.itemsPerPage);
  }

  get totalPagesArray() {
    return Array(this.totalPages)
      .fill(0)
      .map((_, i) => i + 1);
  }

  updatePaginatedProducts() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedProducts = this.products.slice(start, end);
  }
  changePage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePaginatedProducts();
  }

  openModal(product: ProductI) {
    const dialogRef = this.dialog.open(ProductModalComponent, {
      data: product,
      disableClose: true,
      width: '400px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        console.log(result);
        this.notificationMsg = result;
      }
    });
  }
}
