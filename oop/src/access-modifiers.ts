export class User {
  id: number;
  public username: string;

  constructor(id: number, username: string, public password: string) {
    this.id = id;
    this.username = username;
  }
}

const user1 = new User(1, 'jhon', '12345');

user1.id = 2;
user1.username = 'alex';
user1.password = '123456';

console.log(user1.id);
console.log(user1.username);
console.log(user1.password);

export class Student {
  private id: number;
  private readonly grades: number[] = [];

  constructor(id: number, private name: string) {
    this.id = id;
  }

  get Id(): number {
    return this.id;
  }

  set Id(id: number) {
    this.id = id;
  }

  get Name(): string {
    return this.name;
  }

  set Name(name: string) {
    this.name = name;
  }

  get Grades(): readonly number[] {
    return this.grades;
  }

  set Grade(grade: number) {
    this.grades.push(grade);
  }
}

const student1 = new Student(1, 'carl');

console.log(student1.Id);
console.log(student1.Name);
console.log(student1.Grades);

student1.Grade = 6.5;
student1.Grade = 8.0;
student1.Grade = 10.0;

console.log(student1.Grades);
