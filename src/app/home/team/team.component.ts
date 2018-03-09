import {Component, OnInit} from '@angular/core';
import {MainService} from '../../common/main.service';
import {Team} from '../../model/team';
import gql from 'graphql-tag';
import {Apollo} from 'apollo-angular';

const allUsers = gql`
query{
  org(id:"1"){
    teams {
      id
      name
      user{
        id
        first_name
        last_name
        email
      }
      users{
        id
        first_name
        last_name
        email
      }
    }
  }
}
`;

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teams: Team[] = [];
  loading = true;

  constructor(private service: MainService, private apollo: Apollo) {
  }

  ngOnInit() {
    // this.service.Teams().subscribe((data) => {
    //   this.teams = data;
    // });

    this.apollo.watchQuery<any>({
      query: allUsers
    })
      .valueChanges
      .subscribe((data) => {
        this.loading = data.loading;
        if (data.data && data.data.org &&
          data.data.org.length > 0 && data.data.org[0].teams) {
          const teams = data.data.org[0].teams;

          for (let i = 0; i < teams.length; i++) {
            const team = Team.parse(teams[i]);
            this.teams.push(team);
          }
        }
      });
  }

  onNewTeamClick() {

  }
}
