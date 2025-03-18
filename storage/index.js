let count = sessionStorage.getItem("key-count") || 0;
console.log("key-count: " + count);

document.getElementById("count").innerHTML = count;
const counter = () => {
  count++;
  document.getElementById("count").innerHTML = count;
  sessionStorage.setItem("key-count", count);
};

document.getElementById("btn").addEventListener("click", counter);
