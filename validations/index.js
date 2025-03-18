const getValue = (id) => {
  return document.getElementById(id).value;
};
const handleUserData = (e) => {
  e.preventDefault();
  let nameRegex = /^[a-zA-Z\-]+$/;
  let passwordRegex =
    /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/;

  let username = getValue("username");
  let email = getValue("email");
  let password = getValue("password");
  let number = getValue("number");

  if (nameRegex.test(username)) {
    document.getElementById("username").setAttribute("class", "passed");
  } else {
    document.getElementById("username").setAttribute("class", "err");
  }
  if (passwordRegex.test(password)) {
    document.getElementById("password").setAttribute("class", "passed");
  } else {
    document.getElementById("password").setAttribute("class", "err");
  }
};

document.getElementById("userData").addEventListener("submit", handleUserData);

// live
const validation = (id, type) => {
  document.getElementById(id).setAttribute("class", type);
};
document.getElementById("username").addEventListener("input", (e) => {
  // let username=document.getElementById("username").value

  let username = e.target.value;
  let nameRegex = /^[a-zA-Z\-]+$/;
  if (nameRegex.test(username)) {
    document.getElementById("username").setAttribute("class", "passed");
  } else {
    document.getElementById("username").setAttribute("class", "err");
  }
});

document.querySelector("#password").addEventListener("input", (e) => {
  let password = e.target.value;
  let passwordRegex =
    /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/;

  // if (passwordRegex.test(password)) {
  //   validation("password", "passed");
  // } else {
  //   validation("password", "err");
  // }
  // passwordRegex.test(password)
  //   ? validation("password", "passed")
  //   : validation("password", "err");
  validation("password", passwordRegex.test(password) ? "passed" : "err");
});
