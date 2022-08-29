export class User {
  id: number;
  public username: string;

  constructor(id: number, username: string, public password: string) {
    this.id = id;
    this.username = username;
  }
}

const user1 = new User(1, 'jhon', 'doe');

user1.id = 2;
user1.username = 'alex';
user1.password = 'jhones';

console.log(user1.id);
console.log(user1.username);
console.log(user1.password);

export class Student {
  private id: number;
  private grades: number[] = [];

  constructor(id: number, private name: string) {
    this.id = id;
  }

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getGrades(): readonly number[] {
    return this.grades;
  }

  addGrade(grade: number): void {
    this.grades.push(grade);
  }
}

const student1 = new Student(1, 'carl');

console.log(student1.getId());
console.log(student1.getName());
console.log(student1.getGrades());

student1.addGrade(6.5);
student1.addGrade(8.0);
student1.addGrade(10.0);

console.log(student1.getGrades());
