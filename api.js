let student = {
  name: "test",
  number: 654356,
  age: 54,
  course: "node",
};

for (const key in student) {
  console.log(key, ":", student[key]);
}

let count = 0;
console.log(count);

count = 10;
console.log(count);
