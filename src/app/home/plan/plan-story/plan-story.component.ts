import {Component, OnInit} from '@angular/core';
import {MainService} from '../../../common/main.service';
import {Product} from '../../../model/product';
import {Project} from '../../../model/project';

@Component({
  selector: 'app-plan-story',
  templateUrl: './plan-story.component.html',
  styleUrls: ['./plan-story.component.css']
})
export class PlanStoryComponent implements OnInit {

  selectedProduct: Product;
  products: Product[];

  selectedProject: Project;
  projects: Project[];

  constructor(private mainService: MainService) {
  }

  ngOnInit() {
    this.mainService.Products()
      .subscribe((products) => {
        this.products = products;
        if (!this.selectedProduct && this.products.length > 0) {
          this.onProductSelect(0);
        }
      });

    this.mainService.Projects()
      .subscribe((projects) => {
        this.projects = projects;
      });
  }


  onProductSelect(index) {
    if (index < this.products.length) {
      this.selectedProduct = this.products[index];
    }
  }

  onProjectSelect(index) {
    if (index < this.projects.length) {
      this.selectedProject = this.projects[index];
    }
  }
}
