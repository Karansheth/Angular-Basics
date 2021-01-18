import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsInformationComponent } from './products-information/products-information.component';

const routes: Routes = [
  {path : 'products-information', component : ProductsInformationComponent},
  {path : 'add-product', component : AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
