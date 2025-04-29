import { CartMethods } from "../api/cart.js";
import navbar from "../components/navbar.js";
import { isLoggedIn } from "../utils/helper.js";

document.getElementById("navbar").innerHTML = navbar();
isLoggedIn();

(async () => {
  const cart = await CartMethods.getAll(); // { carts: [...] }
  uiMaker(cart.carts || cart);
})();

function uiMaker(items) {
  const container = document.getElementById("cart-container");
  container.innerHTML = "";

  if (!items || items.length === 0) {
    const emptyMsg = document.createElement("p");
    emptyMsg.textContent = "Your cart is empty.";
    emptyMsg.className = "text-center text-muted";
    container.appendChild(emptyMsg);
    return;
  }

  // Calculate total
  let total = 0;
  items.forEach((item) => (total += item.price * item.qty));

  items.forEach((item) => {
    // card wrapper
    const wrapper = document.createElement("div");
    wrapper.className = "col-12 mb-4";

    // horizontal card
    const card = document.createElement("div");
    card.className = "card shadow-sm";

    const row = document.createElement("div");
    row.className = "row g-0";

    // image column
    const imgCol = document.createElement("div");
    imgCol.className = "col-md-4";
    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.title;
    img.className = "img-fluid rounded-start";
    imgCol.appendChild(img);

    // details column
    const detailCol = document.createElement("div");
    detailCol.className = "col-md-8";
    const body = document.createElement("div");
    body.className = "card-body d-flex flex-column h-100";

    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = item.title;
    body.appendChild(title);

    const desc = document.createElement("p");
    desc.className = "card-text mb-2";
    desc.textContent = item.desc;
    body.appendChild(desc);

    const priceQty = document.createElement("p");
    priceQty.className = "card-text mb-3";
    priceQty.innerHTML = `<strong>Price:</strong> ₹ ${item.price} &nbsp; <strong>Qty:</strong> ${item.qty}`;
    body.appendChild(priceQty);

    const btnGroup = document.createElement("div");
    btnGroup.className = "mt-auto d-flex gap-2";

    const removeBtn = document.createElement("button");
    removeBtn.className = "btn btn-outline-danger btn-sm";                                                                                                                                                                                                                                                            

    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => CartMethods.delete(item.id);

    const updateBtn = document.createElement("button");
    updateBtn.className = "btn btn-primary btn-sm";
    updateBtn.textContent = "Update Qty";
    updateBtn.onclick = () => {
      const newQty = parseInt(prompt("New quantity:", item.qty), 10);
      if (newQty > 0) console.log("Update", item.id, "→", newQty);
    };

    btnGroup.append(removeBtn, updateBtn);
    body.appendChild(btnGroup);
    detailCol.appendChild(body);

    row.append(imgCol, detailCol);
    card.appendChild(row);
    wrapper.appendChild(card);
    container.appendChild(wrapper);
  });

  // Footer with total
  const footerRow = document.createElement("div");
  footerRow.className = "col-12";
  const footerCard = document.createElement("div");
  footerCard.className = "card p-3 shadow-sm";
  footerCard.innerHTML = `<h5 class=\"m-0\">Total: ₹ ${total}</h5>`;
  footerRow.appendChild(footerCard);
  container.appendChild(footerRow);
}
