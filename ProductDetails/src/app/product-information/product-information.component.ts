import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductInfoService } from '../product-info.service';

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.css']
})
export class ProductInformationComponent implements OnInit {

  Images: string[] = [];
  ProductNames: string[] = [];
  ProductCodes: string[] = [];
  BranchNames: string[] = [];
  BranchCodes: number[] = [];
  ShippingAddresses: string[] = [];
  Search: string = '';

  public AllProducts !: Product[];
  constructor(private ProductInfo: ProductInfoService) { }

  ngOnInit(): void {

    this.Images = this.ProductInfo.GetImages();
    this.ProductNames = this.ProductInfo.GetProductNames();
    this.ProductCodes = this.ProductInfo.GetProductCodes();
    this.BranchNames = this.ProductInfo.GetBranchNames();
    this.BranchCodes = this.ProductInfo.GetBranchCodes();
    this.ShippingAddresses = this.ProductInfo.GetShippingAddresses();

    this.AllProducts = [
      {
        Image : this.Images[0],
        ProductName : this.ProductNames[0],
        ProductCode : this.ProductCodes[0],
        BranchName : this.BranchNames[0],
        BranchCode : this.BranchCodes[0],
        ShippingAddress : this.ShippingAddresses[0]
      },
      {
        Image: this.Images[1],
        ProductName : this.ProductNames[1],
        ProductCode : this.ProductCodes[1],
        BranchName : this.BranchNames[1],
        BranchCode : this.BranchCodes[1],
        ShippingAddress : this.ShippingAddresses[1]
      },
      {
        Image: this.Images[2],
        ProductName : this.ProductNames[2],
        ProductCode : this.ProductCodes[2],
        BranchName : this.BranchNames[2],
        BranchCode : this.BranchCodes[2],
        ShippingAddress : this.ShippingAddresses[2]
      },
      {
        Image: this.Images[3],
        ProductName : this.ProductNames[3],
        ProductCode : this.ProductCodes[3],
        BranchName : this.BranchNames[3],
        BranchCode : this.BranchCodes[3],
        ShippingAddress : this.ShippingAddresses[3]
      },
      {
        Image: this.Images[4],
        ProductName : this.ProductNames[4],
        ProductCode : this.ProductCodes[4],
        BranchName : this.BranchNames[4],
        BranchCode : this.BranchCodes[4],
        ShippingAddress : this.ShippingAddresses[4]
      },
    ];

  }

  // tslint:disable-next-line: variable-name
  GetProductDetail(Product_Name: string, Product_Code: string, Branch_Name: string, Branch_Code: number, Shipping_Address: string)
  {
    // tslint:disable-next-line: max-line-length
    alert('Product Name: ' + Product_Name + '\nProduct Code: ' + Product_Code + '\nBranch Name: ' + Branch_Name + '\nBranch Code: ' + Branch_Code + '\nShipping Address: ' + Shipping_Address);
  }
}

