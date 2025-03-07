class Student {
  #name;
  #number;
  constructor(name, number, grid, course) {
    this.#name = name;
    this.#number = number;
    this.grid = grid;
    this.course = course;
  }
  leave() {
    console.log("leave", this.name);
  }

  printDetails() {
    console.log(
      `name: ${this.name}, number: ${this.number}, course:${this.course}`
    );
  }

  getName() {
    console.log(this.#name);
  }
  setName(name) {
    this.#name = name;
  }
  setNumber(number) {
    this.#number = number;
  }
  getNumber() {
    console.log(this.#number);
  }
}

class VipStudent extends Student {
  constructor(name, number, grid, course, fee) {
    super(name, number, grid, course);
    this.fee = fee;
  }
}
let std = new Student("ankit", 34554654, 6786, "full stack");
let std2 = new Student("sarvesh", 34554654, 6532, "full stack");
std.setName("sarvesh");
std.getName();

// const sum = (a, b) => {};

// const sum = (a, b, c) => {};
