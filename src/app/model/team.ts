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

  public static parse(obj) {
    if (!obj) {
      return null;
    }

    const id = obj.id ? obj.id : '';
    const name = obj.name ? obj.name : '';
    const admin = obj.user ? User.parse(obj.user) : null;
    const members = [];

    if (obj.users) {
      for (let i = 0; i < obj.users.length; i++) {
        const user = User.parse(obj.users[i]);
        if (user) {
          members.push(user);
        }
      }
    }

    return new Team(id, name, admin, members);
  }

  public clone(): Team {
    return new Team(this.id,
      this.name,
      this.admin,
      this.members);
  }
}
