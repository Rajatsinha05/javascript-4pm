import { api } from "../config/api.js";

export const productMethods = {
  getAll: async () => {
    let req = await fetch(api.carts);
    let res = await req.json();
    return res;
  },
  post: async (data) => {
    await fetch(api.carts, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
  update: async (id, data) => {
    await fetch(`${api.carts}/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
  delete: async (id) => {
    await fetch(`${api.carts}/${id}`, {
      method: "DELETE",
    });
  },
  getById: async (id) => {
    let req = await fetch(`${api.carts}/${id}`);
    let res = await req.json();
    return res;
  },
};