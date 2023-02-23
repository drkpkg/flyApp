import * as moment from "moment";

export default class User{
  id: number;
  role: string;
  email: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;

  constructor() {
    this.id = 0;
    this.role = '';
    this.email = '';
    this.created_at = '';
    this.updated_at = '';
    this.deleted_at = '';
  }

  static fromJson(json: any): User {
    let user = new User();
    user.id = json.id;
    user.role = json.role;
    user.email = json.email;
    user.created_at = moment(json.created_at).format('DD-MM-YYYY');
    user.updated_at = moment(json.updated_at).format( 'DD-MM-YYYY');
    user.deleted_at = json.deleted_at ? moment(json.deleted_at).format('DD-MM-YYYY') : null;
    return user;
  }

  static fromJsonList(json: any[]): User[]{
    let users: User[] = [];
    json.forEach((value) => {
      users.push(User.fromJson(value));
    });
    return users;
  }
}
