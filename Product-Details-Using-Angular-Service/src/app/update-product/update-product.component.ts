import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  public changeProduct : Product;
  products: any;

  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.changeProduct = new Product();
  }

  originalProductName: string;
  originalProductCode: string;
  originalBranchName: string;
  originalBranchCode: string;
  originalShippingAddress: string;

  getOriginalProductInformation(event)
  {
      this.originalProductName = event.productName;
      this.originalProductCode = event.productCode;
      this.originalBranchName = event.branchName;
      this.originalBranchCode = event.branchCode;
      this.originalShippingAddress = event.shippingAddress;
  }

  updateProduct() {
    let post = {
     productName : this.changeProduct.productName,
     productCode : this.changeProduct.productCode,
     branchName : this.changeProduct.branchName,
     branchCode : this.changeProduct.branchCode,
     shippingAddress : this.changeProduct.shippingAddress
    }
    console.log("Updated product Information: " + "\nProduct Name: " + post.productName +
    "\nProduct Code: " + post.productCode + "\nBranch Name: " + post.branchName +
    "\nBranch Code: " + post.branchCode + "\nShipping Address: " + post.shippingAddress);
  }
}
