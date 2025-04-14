const getValue = (id) => {
  return document.getElementById(id).value;
};

// post method

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
  create(product);
  console.log(product);
};

document.getElementById("product").addEventListener("submit", handleSubmit);
