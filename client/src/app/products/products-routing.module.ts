import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoggedGuard } from './logged.guard';


const routes: Routes = [
  {path: 'products', component: ProductsListComponent },
  {path: 'shoppingCart', component: ShoppingCartComponent },
  {path: 'checkout', component: CheckoutComponent, canActivate: [LoggedGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
