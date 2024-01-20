import { Component ,OnInit} from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
public products : any=[];
public grandTotal: number=0;
constructor(private cartService:CartService){}
public date:any=Date;
ngOnInit(): void {
 this.date=new Date();
 this.date.setDate(this.date.getDate()+3)

    this.cartService.getProducts()
    .subscribe(res=>{
      this.products=res;
      this.grandTotal=this.cartService.getTotalPrice()
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
emptycart(){
  this.cartService.removeAllCart();
}
successcart(){
  this.cartService.removeAllCart();
  window.alert("Checkout succesful")
}

}
