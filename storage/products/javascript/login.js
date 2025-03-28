let users = JSON.parse(localStorage.getItem("users")) || [];

const isExists = (email) => {
  let isUser = users.find((user) => user.email === email);

  if (isUser) {
    return { found: true, user: isUser };
  } else {
    return { found: false, user: isUser };
  }
};
const handleSubmit = (e) => {
  e.preventDefault();
  let user = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  let userData = isExists(user.email);
  if (userData.found) {
    if (userData.user.password == user.password) {
      console.log("login success");
      alert("login success");
      window.location.href="/storage/products/"
    } else {
      console.log("password does not match");
      alert("password does not match");
    }
  } else {
    alert("invalid email");
    console.log(userData);
  }
};

document.getElementById("login").addEventListener("submit", handleSubmit);
