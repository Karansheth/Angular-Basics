import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PostService } from '../Services/post.service';
import { observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Product';

@Component({
  selector: 'app-products-information',
  templateUrl: './products-information.component.html',
  styleUrls: ['./products-information.component.css']
})

export class ProductsInformationComponent implements OnInit {

  public updateProduct : Product;
  products: any = [];

  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.service.getProducts()
    .subscribe(response => {
      this.products = response;
      console.log(response);
    });
  }

  @Output() updateProductEvent = new EventEmitter<object>();

  updateSelectedProduct(productName: string, productCode: string, branchName: string,
    branchCode: string, shippingAddress: string) {
    this.updateProductEvent.emit({'productName' : productName, 'productCode' : productCode,
    'branchName' : branchName, 'branchCode' : branchCode, 'shippingAddress' : shippingAddress});
  }

  deleteProduct(productName, productCode, branchName, branchCode, shippingAddress) {
    console.log("Deleted product Information: " + "\nProduct Name: " + productName +
    "\nProduct Code: " + productCode + "\nBranch Name: " + branchName +
    "\nBranch Code: " + branchCode + "\nShipping Address: " + shippingAddress);
  }

}


