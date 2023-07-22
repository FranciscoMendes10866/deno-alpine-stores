import { Router } from "oak";

import template from "../modules/template.ts";

export const productsRouter = new Router();

productsRouter.get("/", async (ctx) => {
  const res = await fetch("https://dummyjson.com/products?limit=4");
  const { products } = await res.json();

  const html = await template.render("home", { products });
  ctx.response.type = "text/html";
  ctx.response.body = html;
});

productsRouter.get("/:id", async (ctx) => {
  const productId = ctx.params.id;

  const res = await fetch(`https://dummyjson.com/products/${productId}`);
  const product = await res.json();

  const html = await template.render("details", { product });
  ctx.response.type = "text/html";
  ctx.response.body = html;
});
