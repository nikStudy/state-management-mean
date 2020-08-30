import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsService } from './products.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxStripeModule } from 'ngx-stripe';
import { LoggedGuard } from './logged.guard';
import { ProductsStore } from '../services/products.store';
import { HttpClientModule } from '@angular/common/http';
import { CartStore } from '../services/cart.store';

@NgModule({
  declarations: [ProductsListComponent, ShoppingCartComponent, CheckoutComponent ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxStripeModule.forRoot('pk_test_WjoZqJPM8rCYZ8mNzst6ZaTr00r88kew2O'),
    ProductsRoutingModule
  ],
  providers: [ProductsService, LoggedGuard, ProductsStore, CartStore]
})
export class ProductsModule { }
