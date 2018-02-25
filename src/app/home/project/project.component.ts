import {Component, OnInit} from '@angular/core';
import {Project} from '../../model/project';
import {MainService} from '../../common/main.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects: Project[];

  constructor(private mainService: MainService) {
  }

  ngOnInit() {
    this.mainService.Projects()
      .subscribe((projects) => {
        this.projects = projects;
      });
  }

  onNewProjectClick() {

  }

}
