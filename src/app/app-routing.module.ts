import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from './component/products/products.component'
import { CartComponent } from './component/cart/cart.component';
import { ChcksmryComponent } from './chcksmry/chcksmry.component';
const routes: Routes = [
  {path:'',redirectTo:'catalogue',pathMatch:'full'},
  {path:'catalogue',component:ProductsComponent},
  {path:'cart',component:CartComponent},
  {path:'checkout',component:ChcksmryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
