import { Component, OnInit }  from '@angular/core';
import { environment }        from '../../environments/environment';
import { ProductService }     from '../_services/product.service';
import { Product } from '../_models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  imageUlr  = environment.apiUrl + 'images';
  products   : Product[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.loadChunkProduct();
  }
  loadChunkProduct() {
    this.productService.getChunkProducts().subscribe(resp => {
      this.products = resp;

    })
  }

}
