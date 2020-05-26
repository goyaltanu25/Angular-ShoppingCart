import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ForgotPassComponent } from './auth/forgot-pass/forgot-pass.component';
import { CartComponent } from './cart/cart.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ShowproductComponent } from './showproduct/showproduct.component';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'cart' ,component: CartComponent},
  { path: 'checkout' ,component: CheckoutComponent},
  { path: 'product-list', component: ProductListComponent },
  { path: 'login/forgot', component: ForgotPassComponent },
  { path: 'product-list/:id', component: ShowproductComponent},
  { path: '**', component: SignupComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
