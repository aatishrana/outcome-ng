import {User} from './user';
/**
 * Created by Aatish on 2/25/2018.
 */
export class ProductBacklog {
  constructor(public id: string,
              public name: string,
              public desc: string,
              public type: string,
              public active: boolean,
              public priority: string,
              public created_by: User) {
  }

  public static parse(obj) {
    if (!obj) {
      return null;
    }

    const id = obj.id ? obj.id : '';
    const name = obj.name ? obj.name : '';
    const desc = obj.desc ? obj.desc : '';
    const type = obj.type ? obj.type : '';
    const active = obj.active ? obj.active : false;
    const priority = obj.priority ? obj.priority : '';
    const admin = obj.user ? User.parse(obj.user) : null;

    return new ProductBacklog(id, name, desc, type, active, priority, admin);
  }

  clone(): ProductBacklog {
    return new ProductBacklog(this.id,
      this.name,
      this.desc,
      this.type,
      this.active,
      this.priority,
      this.created_by);
  }
}
