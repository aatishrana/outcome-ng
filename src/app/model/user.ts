/**
 * Created by Aatish on 2/24/2018.
 */
export class User {
  constructor(public id: string,
              public first_name: string,
              public last_name: string,
              public email: string) {
  }

  public static parse(user) {
    if (!user) {
      return null;
    }

    const id = user.id ? user.id : '';
    const first_name = user.first_name ? user.first_name : '';
    const last_name = user.last_name ? user.last_name : '';
    const email = user.email ? user.email : '';

    return new User(id, first_name, last_name, email);
  }

  public clone(): User {
    return new User(this.id,
      this.first_name,
      this.last_name,
      this.email);
  }
}
