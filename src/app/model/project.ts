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

  public static parse(obj) {
    if (!obj) {
      return null;
    }

    const id = obj.id ? obj.id : '';
    const name = obj.name ? obj.name : '';
    const admin = obj.user ? User.parse(obj.user) : null;
    const team = obj.team ? Team.parse(obj.team) : null;
    const product = obj.product ? Product.parse(obj.product) : null;

    return new Project(id, name, admin, team, product);
  }

  clone(): Project {
    return new Project(this.id,
      this.name,
      this.admin,
      this.team,
      this.product);
  }
}
