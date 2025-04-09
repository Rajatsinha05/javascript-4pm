const getValue = (id) => {
  return document.getElementById(id).value;
};

const uiMaker = (products) => {
  document.getElementById("productList").innerHTML = "";
  products.map((product, index) => {
    let title = document.createElement("h1");
    title.innerHTML = product.title;
    let image = document.createElement("img");
    image.src = product.img;
    let price = document.createElement("p");
    price.innerHTML = product.price;
    let category = document.createElement("p");
    category.innerHTML = product.category;
    let dltBtn = document.createElement("button");
    dltBtn.innerHTML = "Delete";
    dltBtn.addEventListener("click", () => {
      products.splice(index, 1);
      uiMaker(products);
      localStorage.setItem("products", JSON.stringify(products));
    });
    let div = document.createElement("div");
    div.append(image, title, price, category, dltBtn);
    document.getElementById("productList").append(div);
  });
};

let products = JSON.parse(localStorage.getItem("products")) || [];
uiMaker(products);
const handleSubmit = (e) => {
  e.preventDefault();
  let product = {
    title: getValue("title"),
    price: getValue("price"),
    img: getValue("img"),
    category: getValue("category"),
    id: Date.now(),
  };
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
  uiMaker(products);
};

document.getElementById("product").addEventListener("submit", handleSubmit);

// sorting

const handleSort = (orderBy) => {
  if (orderBy == "lth") {
    let temp = products.sort((a, b) => a.price - b.price);
    uiMaker(temp);
  } else {
    let temp = products.sort((a, b) => b.price - a.price);
    uiMaker(temp);
  }
};
document
  .getElementById("lth")
  .addEventListener("click", () => handleSort("lth"));

document
  .getElementById("htl")
  .addEventListener("click", () => handleSort("htl"));

// filter by category
const FilterByCategory = (category) => {
  if (category == "all") {
    uiMaker(products);
    return;
  }
  let temp = products.filter((ele) => ele.category == category);
  uiMaker(temp);
};
document
  .getElementById("all")
  .addEventListener("click", () => FilterByCategory("all"));
document
  .getElementById("men")
  .addEventListener("click", () => FilterByCategory("men"));
document
  .getElementById("women")
  .addEventListener("click", () => FilterByCategory("women"));
document
  .getElementById("kids")
  .addEventListener("click", () => FilterByCategory("kids"));

//   searching
const handleSearch = (val) => {
  let temp = products.filter((ele) => ele.title.includes(val));
  uiMaker(temp);
};

document.getElementById("search").addEventListener("input", () => {
  let val = document.getElementById("search").value;
  handleSearch(val);
});
