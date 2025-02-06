// let sum = 0;
// for (let i = 5; i <= 10; i++) {
//   sum += i;
// }
// console.log(sum);

// for (let i = 2; i < 10; i += 2) {

// }

// let i = 1;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// let i = 10;

// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// reverse loop
// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// nested loop

// for (let i = 1; i <= 5; i++) {
//   for (let j = i; j <= 3; j++) {
//     console.log(i + j);
//   }
// }

// // 2 3 4 4 5 9
// // 2 3 4 4 5 6
// // 2 3 4 4 5 6 6 4 5

let sum = 0;
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (i == j) {
      sum += i + j;
    }
  }
}

console.log(-sum);
