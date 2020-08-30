import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ProductsStore } from 'src/app/services/products.store';
import { Observable } from 'rxjs';
import { CartStore } from 'src/app/services/cart.store';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: [];
  allProducts$: Observable<[]>;
  datasaved = false;
  message = '';

  constructor(
    private productservice: ProductsService, 
    private productstore: ProductsStore,
    private cartstore: CartStore) { }

  ngOnInit(): void {
    this.datasaved = false;
    this.message = '';
    this.allProducts$ = this.productstore.products$;
  }

  // getAllProducts() {
  //   this.productservice.getProducts().subscribe(data => {
  //     // console.log(data);
  //     if (data.success) {
  //       this.datasaved = true;
  //       this.message = data.message;
  //       this.products = data.products;
  //     }
  //   });
  // }

  addToCart(productId) {
    // this.productservice.addItemToCart(productId).subscribe(data => {
    //   // console.log(data);
    // });
    this.cartstore.addItemToCart(productId).subscribe(data => {
      // console.log(data);
      // console.log(data.cart.totalQty);
      this.cartstore.shoppingCart();
    });
  }

}
