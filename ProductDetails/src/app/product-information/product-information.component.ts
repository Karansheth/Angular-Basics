import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductInfoService } from '../product-info.service';

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.css']
})
export class ProductInformationComponent implements OnInit {

  images: string[] = [];
  productNames: string[] = [];
  productCodes: string[] = [];
  branchNames: string[] = [];
  branchCodes: number[] = [];
  shippingAddresses: string[] = [];
  search: string = '';

  public AllProducts !: Product[];
  constructor(private ProductInfo: ProductInfoService) { }

  ngOnInit(): void {

    this.images = this.ProductInfo.getImages();
    this.productNames = this.ProductInfo.getProductNames();
    this.productCodes = this.ProductInfo.getProductCodes();
    this.branchNames = this.ProductInfo.getBranchNames();
    this.branchCodes = this.ProductInfo.getBranchCodes();
    this.shippingAddresses = this.ProductInfo.getShippingAddresses();

    this.AllProducts = [
      {
        image : this.images[0],
        productName : this.productNames[0],
        productCode : this.productCodes[0],
        branchName : this.branchNames[0],
        branchCode : this.branchCodes[0],
        shippingAddress : this.shippingAddresses[0]
      },
      {
        image: this.images[1],
        productName : this.productNames[1],
        productCode : this.productCodes[1],
        branchName : this.branchNames[1],
        branchCode : this.branchCodes[1],
        shippingAddress : this.shippingAddresses[1]
      },
      {
        image: this.images[2],
        productName : this.productNames[2],
        productCode : this.productCodes[2],
        branchName : this.branchNames[2],
        branchCode : this.branchCodes[2],
        shippingAddress : this.shippingAddresses[2]
      },
      {
        image: this.images[3],
        productName : this.productNames[3],
        productCode : this.productCodes[3],
        branchName : this.branchNames[3],
        branchCode : this.branchCodes[3],
        shippingAddress : this.shippingAddresses[3]
      },
      {
        image: this.images[4],
        productName : this.productNames[4],
        productCode : this.productCodes[4],
        branchName : this.branchNames[4],
        branchCode : this.branchCodes[4],
        shippingAddress : this.shippingAddresses[4]
      },
    ];

  }

  // tslint:disable-next-line: variable-name
  getProductDetail(Product_Name: string, Product_Code: string, Branch_Name: string,
    Branch_Code: number, Shipping_Address: string)
  {
    // tslint:disable-next-line: max-line-length
    alert('Product Name: ' + Product_Name + '\nProduct Code: ' + Product_Code +
    '\nBranch Name: ' + Branch_Name + '\nBranch Code: ' + Branch_Code +
    '\nShipping Address: ' + Shipping_Address);
  }
}

