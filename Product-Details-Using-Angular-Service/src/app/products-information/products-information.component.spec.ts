import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { PostService } from '../Services/post.service';

import { ProductsInformationComponent } from './products-information.component';

describe('ProductsInformationComponent', () => {
  let component: ProductsInformationComponent;
  let fixture: ComponentFixture<ProductsInformationComponent>;
  let services: PostService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsInformationComponent ],
      imports: [HttpClientModule],
      providers: [PostService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsInformationComponent);
    services = TestBed.inject(PostService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test ngOnInit', () => {
    let obj: any;
    spyOn(services, 'getProducts').and.returnValue(obj);
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

});
