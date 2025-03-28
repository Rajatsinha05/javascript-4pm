let users = JSON.parse(localStorage.getItem("users")) || [];

const isExists = (email) => {
  let isUser = users.find((user) => user.email === email);
  if (isUser) {
    return true;
  } else {
    return false;
  }
};
const handleSubmit = (e) => {
  e.preventDefault();
  let user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  if (isExists(user.email)) {
    alert("user already exists");
    return;
  } else {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("User created successfully");
    document.getElementById("signup").reset();
  }
};

document.getElementById("signup").addEventListener("submit", handleSubmit);
