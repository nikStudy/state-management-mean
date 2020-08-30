import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsStore {
    private subject = new BehaviorSubject<[]>([]);

    products$ : Observable<[]> = this.subject.asObservable();

    constructor(
        private http: HttpClient
    ) {
        this.getAllProducts();
    }

    private getAllProducts() {
        const productUrl = '/api/products/';
        const loadProducts$ = this.http.get<[]>(productUrl)
            .pipe(
                map(response => response["products"]),
                catchError(err => {
                    const messsage = "Could not load products";
                    console.log(messsage, err);
                    return throwError(err);
                }),
                tap(products => this.subject.next(products)),
                shareReplay()
            );
        loadProducts$.subscribe(); 
    }

    // loadAllProducts(): Observable<[]> {
    //     // return this.products$.pipe(
    //     //     map(products => products)
    //     // );
    //     return this.subject.asObservable();
    // }

}