const getData = async () => {
  try {
    let req = await fetch("https://fakestoreapi.com/products");
    let res = await req.json();
    console.log(res);
  } catch (error) {}
};

fetch("https://fakestoreapi.com/products")
  .then((req) => req.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
