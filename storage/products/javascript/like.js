let likes = JSON.parse(localStorage.getItem("likes")) || [];

const uiMaker = (likes) => {
    document.getElementById("likes").innerHTML=""
  likes.map((ele, i) => {
    let img = document.createElement("img");
    img.src = ele.img;
    let title = document.createElement("h3");
    title.innerHTML = ele.title;
    let price = document.createElement("p");
    price.innerHTML = ele.price;
    let btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.addEventListener("click", () => {
      likes.splice(i, 1);
      localStorage.setItem("likes", JSON.stringify(likes));
      uiMaker(likes);
    });
    let div = document.createElement("div");
    div.append(img, title, price, btn);
    document.getElementById("likes").append(div);
  });
};

uiMaker(likes);
