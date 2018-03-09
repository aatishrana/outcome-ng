import {User} from './user';
import {ProductBacklog} from './backlog';
/**
 * Created by Aatish on 2/25/2018.
 */
export class Product {
  constructor(public id: string,
              public name: string,
              public desc: string,
              public admin: User,
              public backlogs: ProductBacklog[],
              public expanded: boolean) {
  }

  public static parse(obj) {
    if (!obj) {
      return null;
    }

    const id = obj.id ? obj.id : '';
    const name = obj.name ? obj.name : '';
    const desc = obj.desc ? obj.desc : '';
    const expanded = false;
    const admin = obj.user ? User.parse(obj.user) : null;
    const backlogs = [];

    if (obj.backlogs) {
      for (let i = 0; i < obj.backlogs.length; i++) {
        const backlog = ProductBacklog.parse(obj.backlogs[i]);
        if (backlog) {
          backlogs.push(backlog);
        }
      }
    }

    return new Product(id, name, desc, admin, backlogs, expanded);
  }

  clone(): Product {
    return new Product(this.id,
      this.name,
      this.desc,
      this.admin,
      this.backlogs,
      this.expanded);
  }
}
