import {Injectable} from '@angular/core';
import {Team} from '../model/team';
import {User} from '../model/user';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Product} from '../model/product';
import {ProductBacklog} from '../model/backlog';
import {Project} from '../model/project';
/**
 * Created by Aatish on 2/24/2018.
 */
@Injectable()
export class MainService {
  private teams: BehaviorSubject<Team[]>;
  private users: BehaviorSubject<User[]>;
  private products: BehaviorSubject<Product[]>;
  private projects: BehaviorSubject<Project[]>;
  private xShowroomBacklogs: BehaviorSubject<ProductBacklog[]>;

  constructor() {
    this.users = new BehaviorSubject<User[]>(this.addSampleUsers());
    this.teams = new BehaviorSubject<Team[]>(this.addSampleTeams());

    this.xShowroomBacklogs = new BehaviorSubject<ProductBacklog[]>(this.addSampleXShowroomBacklogs());
    this.products = new BehaviorSubject<Product[]>(this.addSampleProducts());

    this.projects = new BehaviorSubject<Project[]>(this.addSampleProjects());
  }

  public Teams() {
    return this.teams;
  }

  public Products() {
    return this.products;
  }

  public Projects() {
    return this.projects;
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
    users.push(new User('14', 'ravi', 'kumar', 'ravi.kumar@outcom.com'));
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

    // return this.multiple(products);
    return teams;
  }

  private addSampleProducts() {
    const products = [];
    const xShowroomAdmin = this.users.getValue()[13];
    const xShowroomBacklogs = this.xShowroomBacklogs.getValue();
    products.push(new Product('1', 'xShowroom', 'xShowroom is a lead management system.', xShowroomAdmin, xShowroomBacklogs, false));

    // return this.multiple(products);
    return products;
  }

  private addSampleXShowroomBacklogs() {
    const backlogs = [];

    backlogs.push(new ProductBacklog('1',
      'Lead Sync',
      'I as user should be able to click a button and sync all ' +
      'the new leads i have created up till now, from the xshowroom ' +
      'tablet application',
      'feature',
      true,
      'medium',
      this.users.getValue()[7]));

    backlogs.push(new ProductBacklog('2',
      'Demo Video',
      'I as user should be able to play a video in demo and it should' +
      'start playing immediately if i have ever buffered and played it before',
      'feature',
      true,
      'low',
      this.users.getValue()[3]));

    // return this.multiple(backlogs);
    return backlogs;
  }

  private multiple(data) {
    const temp = [];
    data.forEach((value, index, array) => {
      temp.push(value.clone());
      temp.push(value.clone());
      temp.push(value.clone());
      temp.push(value.clone());
    });
    return temp;
  }

  private addSampleProjects() {
    const projects = [];

    projects.push(new Project('1',
      'xShowroom Android App',
      this.users.getValue()[0],
      this.teams.getValue()[2],
      this.products.getValue()[0]));

    projects.push(new Project('1',
      'xShowroom iOS App',
      this.users.getValue()[2],
      this.teams.getValue()[1],
      this.products.getValue()[0]));

    return projects;
  }
}
