import {Component, OnInit} from '@angular/core';
import {Project} from '../../model/project';
import {MainService} from '../../common/main.service';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

const allProjects = gql`
  query{
  org(id:"1"){
  	products{
      projects{
        id
        name
        product {
          id
          name
        }
        user{
          first_name
          last_name
          email
        }
        team{
          name
          users{
            first_name
            last_name
            email
          }
        }
      }
    }
  }
}
`;

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects: Project[] = [];
  loading = true;


  constructor(private mainService: MainService,
              private apollo: Apollo) {
  }

  ngOnInit() {
    // this.mainService.Projects()
    //   .subscribe((projects) => {
    //     this.projects = projects;
    //   });

    this.apollo.watchQuery<any>({
      query: allProjects
    })
      .valueChanges
      .subscribe((data) => {
        this.loading = data.loading;
        if (data.data && data.data.org &&
          data.data.org.length > 0 && data.data.org[0].products) {
          const products = data.data.org[0].products;

          for (let i = 0; i < products.length; i++) {
            if (products[i].projects) {
              for (let j = 0; j < products[i].projects.length; j++) {
                const project = products[i].projects[j];
                this.projects.push(Project.parse(project));
              }
            }
          }
        }
      });
  }

  onNewProjectClick() {

  }

}
