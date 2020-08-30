import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap, shareReplay, delay, distinctUntilChanged, auditTime, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartStore {
    private subjectTotalRecords = new BehaviorSubject<Number>(0);
    cartTotalRecords$ : Observable<Number> = this.subjectTotalRecords.asObservable();

    private subjectCartProducts = new BehaviorSubject<[]>([]);
    cartProducts$ : Observable<[]> = this.subjectCartProducts.asObservable();

    private subjectTotalPrice = new BehaviorSubject<Number>(0);
    cartTotalPrice$ : Observable<Number> = this.subjectTotalPrice.asObservable();

    private subjectCartEmpty = new BehaviorSubject<Boolean>(false);
    cartEmpty$ : Observable<Boolean> = this.subjectCartEmpty.asObservable();

    constructor( private http: HttpClient ) {
        this.shoppingCart();
    }

    shoppingCart(){
        const url = '/api/shopping-cart/';
        const shoppingcart$ =  this.http.get<any>(url)
        .pipe(
            map(response => response),
            catchError(err => {
                const messsage = "Could not load cart";
                console.log(messsage, err);
                this.subjectTotalRecords.next(0);
                this.subjectCartProducts.next([]);
                this.subjectTotalPrice.next(0);
                this.subjectCartEmpty.next(true);
                return throwError(err);
            }),
            tap(response => {
                if (response["success"]) {
                    this.subjectTotalRecords.next(response["totalRecords"]);
                    this.subjectCartProducts.next(response["products"]);
                    this.subjectTotalPrice.next(response["totalPrice"]);
                    this.subjectCartEmpty.next(false);
                } else {
                    this.subjectTotalRecords.next(0);
                    this.subjectCartProducts.next([]);
                    this.subjectTotalPrice.next(0);
                    this.subjectCartEmpty.next(true);
                }
                
            }),
            shareReplay()
        );
        shoppingcart$.subscribe();
    }

    addItemToCart(id): Observable<any>{
        const url = '/api/add-to-cart/';
        return this.http.get<any>(url + id)
        .pipe(
            map(response => response),
            tap(response => this.subjectTotalRecords.next(response.cart.totalQty)),
            shareReplay()
        );
    }


    
}