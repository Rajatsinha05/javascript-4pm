const divide = (a, b) => {
  if (b == 0) {
    throw new Error("error: cannot divide by zero");
  }
  if (a == 0) {
    throw new Error("error: a cannot be 0");
  }
  return a / b;
};

console.log("before divide");

try {
  console.log(divide(0, 1));
  let i = 0;
  //   while (i < 10) {
  //     // console.log(i);
  //   }
  //   system.exit(0);
} catch (err) {
  console.log(err.message);
} finally {
  console.log("process finished");
}

console.log("after divide");
