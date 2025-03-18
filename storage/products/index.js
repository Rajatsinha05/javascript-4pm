const getValue = (id) => {
  return document.getElementById(id).value;
};
let products = JSON.parse(localStorage.getItem("products")) || [];

const uiMaker = (products) => {
  document.getElementById("productList").innerHTML = "";
  products.map((product) => {
    let title = document.createElement("h1");
    title.innerHTML = product.title;
    document.getElementById("productList").append(title);
  });
};
const handleSubmit = (e) => {
  e.preventDefault();
  let product = {
    title: getValue("title"),
    price: getValue("price"),
    img: getValue("img"),
    category: getValue("category"),
  };
  products.push(product);
  uiMaker(products);
  localStorage.setItem("products", JSON.stringify(products));
};

document.getElementById("product").addEventListener("submit", handleSubmit);
