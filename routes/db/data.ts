export interface User {
  email: string;
  pass: string;
  refreshToken: string;
  expiresIn: any;
}

export class Database {
  db = [
    {
      id: 1,
      email: "bart.t@mail.ru",
      pass: "111",
      refreshToken: "",
      expiresIn: ""
    }
  ];

  addUser = (data: User) => {
    this.db[this.db.length - 1] = {
      id: this.db[this.db.length - 1].id + 1,
      email: data.email,
      pass: data.pass,
      refreshToken: data.refreshToken,
      expiresIn: data.expiresIn
    };
  };
}

export const db = new Database();
