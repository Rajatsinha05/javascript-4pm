class Cal {
  constructor() {}
  sum(a, b) {
    console.log(a, b);
    return a + b;
  }
  sum(a, b, c) {
    return a + b + c;
  }
}

class A {
  constructor() {}

  hello() {
    console.log("hello  from  A");
  }
}

class B extends A {
  constructor() {
    super();
  }
  hello() {
    console.log("hello from B");
  }
}
let a = new A();
a.hello();
let b = new B();
b.hello();
// let cal = new Cal();

// let result = cal.sum(10, 20);
// console.log(result);
