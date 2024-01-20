import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList: any[] = [];
  public productList = new BehaviorSubject<any[]>([]);

  constructor() {}

  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(this.cartItemList);
  }

  addToCart(product: any) {
    const existingProduct = this.cartItemList.find((p) => p.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
      existingProduct.total = Math.round(existingProduct.quantity * existingProduct.price);
    } else {
      const newProduct = { ...product, quantity: 1, total: product.price };
      this.cartItemList.push(newProduct);
    }

    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }

  updateQuantity(productId: number, quantity: number) {
    const product = this.cartItemList.find((p) => p.id === productId);

    if (product) {
      product.quantity = quantity;
      product.total = Math.round(product.quantity * product.price);
    }

    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  getTotalPrice():number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    });
    return grandTotal;
    // You might want to do something with grandTotal, like emitting it as an observable.
  }

  removeCartItem(product: any) {
    this.cartItemList = this.cartItemList.filter((a) => a.id !== product.id);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
