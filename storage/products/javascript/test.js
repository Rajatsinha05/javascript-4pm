let test = {
  name: "js",
  age: 20,
};
let testing = {
  number: 453424,
  city: "surat",
};

let tester = {
  ...test,
  ...testing,
  grid: 5643,
};
console.log(tester);
