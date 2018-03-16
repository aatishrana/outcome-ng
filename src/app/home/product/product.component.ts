import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {MainService} from '../../common/main.service';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {CommonService} from '../../common/common.service';
import {ProductBacklog} from '../../model/backlog';

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

  prodId = '';
  backlog: ProductBacklog = null;
  newEdit = false;
  newEditType = '';
  overshadow;

  constructor(private mainService: MainService,
              private apollo: Apollo,
              private commonService: CommonService) {
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

    this.commonService.OverShadow().subscribe((value) => {
      this.overshadow = value;
    });
  }

  onAddNewProduct() {
    this.stopClick();
  }

  onAddNewProductBacklog(productId) {
    this.newEdit = true;
    this.newEditType = 'New';
    this.prodId = productId;
    this.backlog = null;
    this.commonService.overShadowOn();
    this.stopClick();
  }

  onEditProductBacklog(backlog: ProductBacklog) {
    console.log('onEditProductBacklog');
    this.newEdit = true;
    this.newEditType = 'Edit';
    this.backlog = backlog;
    this.prodId = '';
    this.commonService.overShadowOn();
    this.stopClick();
  }

  stopClick() {
    event.stopPropagation();
  }
}
