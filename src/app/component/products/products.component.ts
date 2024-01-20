import { Component } from '@angular/core';
import productData from "../../assets/data.json"
import { CartService } from '../../service/cart.service';
interface Product{
  name:String;
  price:Number;
  image:String;
  weight:String;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products1:Product[] = productData
  public products : any=[];
  constructor(private cartService:CartService){
    this.products1.forEach((a,any) => {
      // Perform any operations for each product
      Object.assign(a,{quantity:1,total:a.price})
    });
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products=res;
     
    })
   }
  
   
   
   updateAddQuantity(product: any) {
    const updatedQuantity = product.quantity + 1;
  
    if (updatedQuantity > 0) {
      this.cartService.updateQuantity(product.id, updatedQuantity);
    }
  }
  updateDeleteQuantity(product: any) {
    const updatedQuantity = product.quantity - 1;
    if(updatedQuantity==0){
      this.deleteProduct(product)
    }
    if (updatedQuantity > 0) {
      this.cartService.updateQuantity(product.id, updatedQuantity);
    }
    else if (updatedQuantity < 0) {
      this.cartService.updateQuantity(product.id,0);
    }
  
  }
  deleteProduct(item:any){
    this.cartService.removeCartItem(item)
  }
addToCart(item:any){
this.cartService.addToCart(item);
}
isProductInCart(product: Product): boolean {
  return this.products.some((item: Product) => item.name === product.name);
}


}

