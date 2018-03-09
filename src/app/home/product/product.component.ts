import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {MainService} from '../../common/main.service';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

const allProducts = gql`
  query{
  org(id:"1"){
    name
    products {
      id
      name
      desc
      productbacklogs{
        id
        desc
        type_cd
        priority
      }
    }
  }
}
`;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  loading = true;

  constructor(private mainService: MainService,
              private apollo: Apollo) {
  }

  ngOnInit() {
    // this.mainService.Products()
    //   .subscribe((products) => {
    //     this.products = products;
    //   });

    this.apollo.watchQuery<any>({
      query: allProducts
    })
      .valueChanges
      .subscribe((data) => {
        this.loading = data.loading;
        if (data.data && data.data.org &&
          data.data.org.length > 0 && data.data.org[0].products) {
          const products = data.data.org[0].products;

          for (let i = 0; i < products.length; i++) {
            this.products.push(Product.parse(products[i]));
          }
        }
      });
  }

  onAddNewProduct() {

  }

  onAddNewProductBacklog(productId) {

  }
}
