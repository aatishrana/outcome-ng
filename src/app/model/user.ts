/**
 * Created by Aatish on 2/24/2018.
 */
export class User {
  constructor(public id: string,
              public first_name: string,
              public last_name: string,
              public email: string) {
  }

  clone(): User {
    return new User(this.id,
      this.first_name,
      this.last_name,
      this.email);
  }
}
