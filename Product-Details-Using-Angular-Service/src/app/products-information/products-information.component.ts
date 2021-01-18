import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/post.service';
import { observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products-information',
  templateUrl: './products-information.component.html',
  styleUrls: ['./products-information.component.css']
})

export class ProductsInformationComponent implements OnInit {

 products: any = [];

  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.service.getProducts()
    .subscribe(response => {
      this.products = response;
      console.log(response);
    });
  }

}


