let count = 0;
// let value = document.getElementById("count").innerHTML;

// setTimeout(() => {
//   let counter = setInterval(() => {
//     count++;
//     // console.log(count);
//     document.getElementById("count").innerHTML = count;
//     if (count === Number(value)) {
//       count = 0;
//     }
//   }, 10);
// }, 2000);

// console.log(date.toDateString());

setInterval(() => {
  let date = new Date();
  console.log(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  );
}, 1000);
