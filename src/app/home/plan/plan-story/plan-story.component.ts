import {Component, OnInit} from '@angular/core';
import {MainService} from '../../../common/main.service';
import {Product} from '../../../model/product';
import {Project} from '../../../model/project';
import {CommonService} from '../../../common/common.service';
import {ProductBacklog} from '../../../model/backlog';
import {Story} from '../../../model/story';

@Component({
  selector: 'app-plan-story',
  templateUrl: './plan-story.component.html',
  styleUrls: ['./plan-story.component.css']
})
export class PlanStoryComponent implements OnInit {

  selectedProduct: Product;
  products: Product[];

  selectedProjectStories: Story[] = [];
  projects: Project[];

  selectedBacklog: ProductBacklog;
  overshadow;
  selectedProjectIndex = -1;

  constructor(private mainService: MainService, private commonService: CommonService) {
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
        if (this.selectedProjectStories.length == 0 && this.projects.length > 0) {
          this.onProjectSelect(0);
        }
      });

    this.commonService.OverShadow()
      .subscribe((value) => {
        this.overshadow = value;
      });
  }


  onProductSelect(index) {
    if (index < this.products.length) {
      this.selectedProduct = this.products[index];
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
