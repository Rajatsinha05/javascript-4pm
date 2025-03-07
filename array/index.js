let marks = [10, 9, -5, -2, 20, -7];
let n = marks.length;

let max = marks[0];
for (let i = 0; i < n; i++) {
  if (marks[i] > max) {
    max = marks[i];
  }
}
console.log(max);
