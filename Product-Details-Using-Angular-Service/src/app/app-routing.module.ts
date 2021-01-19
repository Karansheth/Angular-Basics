import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsInformationComponent } from './products-information/products-information.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path : 'products-information', component : ProductsInformationComponent},
  {path : 'add-product', component : AddProductComponent},
  {path : 'update-product', component : UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
