import { productMethods } from "../api/product.js";
import navbar from "../components/navbar.js";
import { isLoggedIn } from "../utils/helper.js";
document.getElementById("navbar").innerHTML = navbar();

isLoggedIn();
// iife
(async () => {
  let products = await productMethods.getAll();
  console.log(products);

  uiMaker(products);
})();

const uiMaker = (data) => {
    const container = document.getElementById("productList");
    container.innerHTML = "";
  
    data.forEach((product) => {
      // Outer column div
      const col = document.createElement("div");
      col.className = "col-md-4 mb-4";
  
      // Card
      const card = document.createElement("div");
      card.className = "card h-100 shadow-sm";
  
      // Image
      const img = document.createElement("img");
      img.src = product.img;
      img.alt = product.title;
      img.className = "card-img-top";
      img.style.height = "200px";
      img.style.objectFit = "cover";
  
      // Card Body
      const cardBody = document.createElement("div");
      cardBody.className = "card-body";
  
      const title = document.createElement("h5");
      title.className = "card-title";
      title.textContent = product.title;
  
      const desc = document.createElement("p");
      desc.className = "card-text text-muted";
      desc.textContent = product.desc;
  
      const category = document.createElement("p");
      category.className = "mb-1";
      category.innerHTML = `<strong>Category:</strong> ${product.category}`;
  
      const price = document.createElement("p");
      price.className = "fw-bold text-primary";
      price.textContent = `${product.price}`;
  
      // Footer with button
      const footer = document.createElement("div");
      footer.className = "card-footer bg-transparent border-top-0";
  
      const button = document.createElement("button");
      button.className = "btn btn-outline-primary w-100";
      button.textContent = "Add to Cart";
  
      // Assemble card
      cardBody.appendChild(title);
      cardBody.appendChild(desc);
      cardBody.appendChild(category);
      cardBody.appendChild(price);
      footer.appendChild(button);
  
      card.appendChild(img);
      card.appendChild(cardBody);
      card.appendChild(footer);
      col.appendChild(card);
      container.appendChild(col);
    });
  };
  