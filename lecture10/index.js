function test() {
  let a = document.getElementById("valueOfA").value;
  let b = document.getElementById("valueOfB").value;
  //   console.log(Number(a) + Number(b));
  document.getElementById(
    "result"
  ).innerHTML = `sum of a :  ${a} and b : ${b}  =  ${Number(a) + Number(b)}`;
}

function sub() {
  let a = document.getElementById("valueOfA").value;
  let b = document.getElementById("valueOfB").value;
  //   console.log(Number(a) + Number(b));
  document.getElementById("result").innerHTML = Number(a) - Number(b);
}
