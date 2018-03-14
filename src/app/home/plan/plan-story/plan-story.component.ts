import {Component, OnInit} from '@angular/core';
import {MainService} from '../../../common/main.service';
import {Product} from '../../../model/product';
import {Project} from '../../../model/project';
import {CommonService} from '../../../common/common.service';
import {ProductBacklog} from '../../../model/backlog';
import {Story} from '../../../model/story';
import gql from 'graphql-tag';
import {Apollo} from 'apollo-angular';

@Component({
  selector: 'app-plan-story',
  templateUrl: './plan-story.component.html',
  styleUrls: ['./plan-story.component.css']
})
export class PlanStoryComponent implements OnInit {

  selectedProduct: Product;
  products: Product[] = [];

  selectedProjectStories: Story[] = [];
  projects: Project[] = [];

  selectedBacklog: ProductBacklog;
  overshadow;
  selectedProjectIndex = -1;

  public static parseAllProducts(data) {
    let products = [];
    if (data.data
      && data.data.org
      && data.data.org.length > 0
      && data.data.org[0].products) {
      products = data.data.org[0].products;
    }
    return products;
  }

  public static getAllProductQuery(org_id) {
    return gql`
        query{
        org(id:"${org_id}") {
          products {
            id
            name
            productbacklogs {
              id
              desc
              type_cd
              priority
            }
          }
        }
      }
      `;
  }

  public static parseAllProjects(data) {
    let projects = [];
    if (data.data
      && data.data.product
      && data.data.product.length > 0
      && data.data.product[0].projects) {
      projects = data.data.product[0].projects;
    }
    return projects;
  }

  public static getAllProjectsQuery(prod_id) {
    return gql`
         query{
          product(id:"${prod_id}"){
            projects {
              id
              name
            }
          }
        }
        `;
  }

  constructor(private mainService: MainService, private commonService: CommonService, private apollo: Apollo) {
  }

  ngOnInit() {

    this.apollo.watchQuery<any>({
      query: PlanStoryComponent.getAllProductQuery(1)
    })
      .valueChanges
      .subscribe((data) => {
        this.products = [];
        PlanStoryComponent.parseAllProducts(data).forEach((value) => {
          this.products.push(Product.parse(value));
        });
        if (!this.selectedProduct && this.products.length > 0) {
          this.onProductSelect(0);
        }
      });


    // this.mainService.Products()
    //   .subscribe((products) => {
    //     this.products = products;
    //     if (!this.selectedProduct && this.products.length > 0) {
    //       this.onProductSelect(0);
    //     }
    //   });

    // this.mainService.Projects()
    //   .subscribe((projects) => {
    //     this.projects = projects;
    //     if (this.selectedProjectStories.length == 0 && this.projects.length > 0) {
    //       this.onProjectSelect(0);
    //     }
    //   });

    this.commonService.OverShadow()
      .subscribe((value) => {
        this.overshadow = value;
      });
  }


  onProductSelect(index) {
    if (index < this.products.length) {
      this.selectedProduct = this.products[index];

      this.apollo.watchQuery<any>({
        query: PlanStoryComponent.getAllProjectsQuery(this.selectedProduct.id),
      })
        .valueChanges
        .subscribe((data) => {
          console.log(data);
          this.projects = [];
          PlanStoryComponent.parseAllProjects(data).forEach((value) => {
            this.projects.push(Project.parse(value));
          });

          if (this.selectedProjectStories.length == 0 && this.projects.length > 0) {
            this.onProjectSelect(0);
          }
        });
    }
  }

  onProjectSelect(index) {
    this.selectedProjectIndex = index;
    if (index < this.projects.length) {
      this.selectedProjectStories = this.mainService.getProjectStories(this.projects[index].id);
    }
  }

  onBacklogClick(backlog) {
    if (this.selectedProjectStories) {
      this.selectedBacklog = backlog;
      this.commonService.overShadowOn();
    } else {
      alert('Select a project');
    }
  }

  onStorySave(value: Story) {
    const project = this.projects[this.selectedProjectIndex];
    value.project = project.clone();
    console.log(value);
  }
}
