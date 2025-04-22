import { InjectionToken, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FilterComponent } from './common/filter/filter.component';
import { ProductCardComponent } from './products/product-grid/product-card.component';
import { ProductService } from './product.service';
import { CommonModule } from '@angular/common';
import { ProductModalComponent } from './products/product-modal/product-modal.component';
import { NotificationsComponent } from './common/notifications/notifications.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productsReducer } from './store/reducers/products.reducer';
import { ProductsEffects } from './store/effects/products.effect';
import { ProductsModule } from './products.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { ViewCartComponent } from './view-cart/view-cart.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    ProductsModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FilterComponent,
    ProductCardComponent,
    ProductModalComponent,
    NotificationsComponent,
    ViewCartComponent,
  ],
  exports: [AppComponent],
  bootstrap: [AppComponent],
  providers: [ProductService],
})
export class AppModule {}
