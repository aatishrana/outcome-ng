import {Component, OnInit} from '@angular/core';
import {MainService} from '../../common/main.service';
import {Team} from '../../model/team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teams: Team[] = [];

  constructor(private service: MainService) {
  }

  ngOnInit() {
    this.service.Teams().subscribe((data) => {
      this.teams = data;
    });
  }

  onNewTeamClick() {

  }
}
