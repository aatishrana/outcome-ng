import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

const allUsers = gql`
  query{
  org(id:"1"){
    users{
      id
      first_name
      last_name
      email
    }
  }
}
`;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];
  loading = true;

  constructor(private apollo: Apollo) {
  }

  ngOnInit() {

    this.apollo.watchQuery<any>({
      query: allUsers
    })
      .valueChanges
      .subscribe((data) => {
        this.loading = data.loading;
        if (data.data && data.data.org &&
          data.data.org.length > 0 && data.data.org[0].users) {
          const users = data.data.org[0].users;
          for (let i = 0; i < users.length; i++) {
            this.users.push(User.parse(users[i]));
          }
        }
      });
  }

  getInitials(user: User) {
    if (user) {
      const f = user.first_name.substr(0, 1);
      const l = user.last_name.substr(0, 1);
      return f + l;
    }
    return '';
  }
}
