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
