const getValue = (id) => {
  return document.getElementById(id).value;
};
let products = JSON.parse(localStorage.getItem("products")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let likes = JSON.parse(localStorage.getItem("likes")) || [];

// findById
const isExists = (id, data) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      return {
        status:true,
        index:i
      };
    }
  }
  return false;
};
const addToCart = (data) => {
  // data.qty=1
  if (isExists(data.id, cart)) {
    console.log(data, cart, "exists");

    // cart.push({ ...data, qty: data.qty + 1 });
    // cart[index].qty+=1
  } else {
    console.log(data, cart, "not exists");
    cart.push({ ...data, qty: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  // console.log(cart);
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
    let likeButton = document.createElement("button");
    likeButton.innerHTML = "like";
    likeButton.addEventListener("click", () => {
      if (isExists(product.id, likes) == true) {
        alert("Product already exists");
      } else {
        likes.push(product);
        alert("addded ");
        localStorage.setItem("likes", JSON.stringify(likes));
      }
    });
    let cartBtn = document.createElement("button");
    cartBtn.innerHTML = "Cart";
    cartBtn.addEventListener("click", () => addToCart(product));
    let div = document.createElement("div");
    div.append(image, title, price, category, dltBtn, likeButton, cartBtn);
    document.getElementById("productList").append(div);
  });
};

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
  uiMaker(products);
  localStorage.setItem("products", JSON.stringify(products));
};

document.getElementById("product").addEventListener("submit", handleSubmit);

const handleSort = (orderBy) => {
  if (orderBy == "lth") {
    let temp = products.sort((a, b) => a.price - b.price);
    console.log(temp);
    uiMaker(temp);
  } else {
    let temp = products.sort((a, b) => b.price - a.price);
    console.log(temp);
    uiMaker(temp);
  }
};

// category
const FilterByCategory = (category) => {
  if (category == "all") {
    uiMaker(products);
    return;
  }
  let temp = products.filter((ele) => ele.category == category);
  uiMaker(temp);
};

document
  .getElementById("lth")
  .addEventListener("click", () => handleSort("lth"));
document
  .getElementById("htl")
  .addEventListener("click", () => handleSort("htl"));

// filters

document
  .getElementById("kids")
  .addEventListener("click", () => FilterByCategory("kids"));
document
  .getElementById("women")
  .addEventListener("click", () => FilterByCategory("women"));
document
  .getElementById("men")
  .addEventListener("click", () => FilterByCategory("men"));

document
  .getElementById("all")
  .addEventListener("click", () => FilterByCategory("all"));

// searching

const search = (value) => {
  let temp = products.filter((ele) =>
    ele.title.toLowerCase().includes(value.toLowerCase())
  );
  uiMaker(temp);
};

document.getElementById("search").addEventListener("input", () => {
  let value = getValue("search");
  // console.log("value: " + value);
  search(value);
});
