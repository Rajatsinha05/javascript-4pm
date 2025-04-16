const getValue = (id) => {
  return document.getElementById(id).value;
};

const setValue = (id, value) => {
  console.log(id, value);

  document.getElementById(id).value = value;
  // debugger;
};
// post method
let id = -1;
const create = async (data) => {
  let req = await fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  let res = await req.json();
  console.log(res);
};

const handleSubmit = (e) => {
  e.preventDefault();
  let product = {
    title: getValue("title"),
    price: getValue("price"),
    img: getValue("img"),
  };
  if (id == -1) {
    create(product);
  } else {
    update(product);
  }
};

document.getElementById("product").addEventListener("submit", handleSubmit);

// delete method

const deleteData = async (id) => {
  await fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
  });
};

// update ......
const update = async (data) => {
  await fetch(`http://localhost:3000/products/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
const addToForm = (data) => {
  id = data.id;
  delete data.id;
  data.type="update"


  for (const key in data) {
    console.log(key, data[key]);

    setValue(key, data[key]);
  }
  // setValue("title", data.title);
  // setValue("price", data.price);
  // setValue("img", data.img);
  // setValue("type", "update");
};

const uiMaker = (products) => {
  products.map((product) => {
    let title = document.createElement("h1");
    title.innerHTML = product.title;
    let price = document.createElement("p");
    price.innerHTML = product.price;
    let img = document.createElement("img");
    img.src = product.img;
    let dltBtn = document.createElement("button");
    dltBtn.innerHTML = "delete";
    let updateBtn = document.createElement("button");
    updateBtn.innerHTML = "update";
    updateBtn.addEventListener("click", () => addToForm(product));
    dltBtn.addEventListener("click", () => deleteData(product.id));
    let div = document.createElement("div");
    div.append(img, title, price, dltBtn, updateBtn);

    document.getElementById("container").append(div);
  });
};

// get
const getData = async () => {
  let req = await fetch("http://localhost:3000/products");
  let res = await req.json();
  // console.log(res);
  uiMaker(res);
};
getData();
