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

  clone(): Product {
    return new Product(this.id,
      this.name,
      this.desc,
      this.admin,
      this.backlogs,
      this.expanded);
  }
}
