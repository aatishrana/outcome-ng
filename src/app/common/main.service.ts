import {Injectable} from '@angular/core';
import {Team} from '../model/team';
import {User} from '../model/user';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
/**
 * Created by Aatish on 2/24/2018.
 */
@Injectable()
export class MainService {
  private teams: BehaviorSubject<Team[]>;
  private users: BehaviorSubject<User[]>;

  constructor() {
    this.users = new BehaviorSubject<User[]>(this.addSampleUsers());
    this.teams = new BehaviorSubject<Team[]>(this.addSampleTeams());
  }

  public Teams() {
    return this.teams;
  }


  private addSampleUsers() {
    const users = [];
    users.push(new User('1', 'aatish', 'rana', 'aatishranawork@outcom.com'));
    users.push(new User('2', 'sandeep', 'kaur', 'sandeep.kaur@outcom.com'));
    users.push(new User('3', 'vibhanshu', 'jain', 'vibhanshu.jain@outcom.com'));
    users.push(new User('4', 'ganesh', 'raj', 'ganesh.raj@outcom.com'));
    users.push(new User('5', 'mamata', 'limba', 'mamta.limba@outcom.com'));
    users.push(new User('6', 'raman', 'bindal', 'raman.bindal@outcom.com'));
    users.push(new User('7', 'shree', 'ram', 'shree.ram@outcom.com'));
    users.push(new User('8', 'ikjot', 'singh', 'ikjot.singh@outcom.com'));
    users.push(new User('9', 'akash', 'yadav', 'akash.yadav@outcom.com'));
    users.push(new User('10', 'shubham', 'garag', 'shubham.garag@outcom.com'));
    users.push(new User('11', 'mukul', 'goyal', 'mukul.goyal@outcom.com'));
    users.push(new User('12', 'kiran', 'kanade', 'kiran.kanade@outcom.com'));
    users.push(new User('13', 'aman', 'patel', 'aman.patel@outcom.com'));
    return users;
  }

  private addSampleTeams() {
    const users = this.users.getValue();
    console.log(users);
    const teams = [];
    teams.push(new Team('1',
      'Voltas Team',
      users[8],
      [
        users[8], users[1]
      ]));

    teams.push(new Team('2',
      'iOS Team',
      users[2],
      [
        users[2], users[7], users[6]
      ]));

    teams.push(new Team('3',
      'android Team',
      users[0],
      [
        users[0], users[3], users[4], users[5]
      ]));

    teams.push(new Team('4',
      'web team',
      users[0],
      [
        users[0], users[9], users[10], users[11], users[12]
      ]));

    return teams;
  }
}
