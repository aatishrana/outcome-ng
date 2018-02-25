import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {MainService} from '../../common/main.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];

  constructor(private mainService: MainService) {
  }

  ngOnInit() {
    this.mainService.Products()
      .subscribe((products) => {
        this.products = products;
      });
  }

  onAddNewProduct() {

  }

  onAddNewProductBacklog(productId) {

  }
}
