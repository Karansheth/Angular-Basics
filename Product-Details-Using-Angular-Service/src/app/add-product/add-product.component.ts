import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public newProduct : Product;
  products: any;

  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.newProduct = new Product();
  }
  createProduct() {
    let post = {
     productName : this.newProduct.productName,
     productCode : this.newProduct.productCode,
     branchName : this.newProduct.branchName,
     branchCode : this.newProduct.branchCode,
     shippingAddress : this.newProduct.shippingAddress
    }
    console.log("Added product Information: " + "\nProduct Name: " + post.productName +
    "\nProduct Code: " + post.productCode + "\nBranch Name: " + post.branchName +
    "\nBranch Code: " + post.branchCode + "\nShipping Address: " + post.shippingAddress);
  }


}
