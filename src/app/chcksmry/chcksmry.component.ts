import { Component ,OnInit} from '@angular/core';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-chcksmry',
  templateUrl: './chcksmry.component.html',
  styleUrl: './chcksmry.component.scss'
})
export class ChcksmryComponent implements OnInit{
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
  successcart(){
    this.cartService.removeAllCart();
    window.alert("Checkout succesful")
  }
}
