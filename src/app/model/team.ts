import {User} from './user';
/**
 * Created by Aatish on 2/24/2018.
 */
export class Team {
  constructor(public id: string,
              public name: string,
              public admin: User,
              public members: User[]) {
  }

  clone(): Team {
    return new Team(this.id,
      this.name,
      this.admin,
      this.members);
  }
}
