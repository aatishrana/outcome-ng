import {User} from './user';
import {Team} from './team';
import {Product} from './product';
/**
 * Created by Aatish on 2/25/2018.
 */
export class Project {
  constructor(public id: string,
              public name: string,
              public admin: User,
              public team: Team,
              public product: Product) {
  }

  clone(): Project {
    return new Project(this.id,
      this.name,
      this.admin,
      this.team,
      this.product);
  }
}
