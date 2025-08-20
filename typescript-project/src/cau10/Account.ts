class Account {
  public username: string;
  private password: string;
  readonly id: number;

  constructor(username: string, password: string, id: number) {
    this.username = username;
    this.password = password;
    this.id = id;
  }

  checkPassword(pass: string): boolean {
    return this.password === pass;
  }
}

const acc = new Account("user1", "1234", 1);
console.log(acc.username, acc.id, acc.checkPassword("1234"));
