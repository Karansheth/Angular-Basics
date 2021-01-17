import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductInformationComponent } from './product-information/product-information.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  {path : 'product-information', component : ProductInformationComponent},
  {path : 'home', component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
