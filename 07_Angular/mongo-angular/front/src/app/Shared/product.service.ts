import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './product';
import { tap, delay} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly url = 'http://localhost:4242/products';

  private productsSubject$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(null);

  private loaded: boolean = false;

  constructor(private http: HttpClient) { }

  get(): Observable<Product[]>{
    if (!this.loaded) {
      this.http.get<Product[]>(this.url)
      .pipe(
        tap((deps)=> console.log(deps)),
        delay(1000)
      )
      .subscribe(this.productsSubject$);
      this.loaded = true
    }
    return this.productsSubject$.asObservable();
  }

  add(d: Product): Observable<Product>{
    return this.http.post<Product>(this.url, d)
    .pipe(
      tap((prod: Product)=> this.productsSubject$.getValue().push(prod))
    )
  }

  del(prod: Product): Observable<any> {
    return this.http.delete(`${this.url}/${prod._id}`)
    .pipe(
      tap(()=>{
        let products = this.productsSubject$.getValue();
        let i = products.findIndex(d => d._id === prod._id);
        if (i>=0) {
          products.splice(i,1)
        }
      })
    )
  }


  update(prod: Product): Observable<Product> {
    return this.http.patch<Product>(`${this.url}/${prod._id}`, prod)
    .pipe(
      tap((p)=>{
        let products = this.productsSubject$.getValue();
        let i = products.findIndex(p => p._id === prod._id);
        if (i>=0) {
          products[i].name = p.name;
          products[i].stock = p.stock
        }
      })
    )
  }
}
