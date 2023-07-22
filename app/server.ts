import { Application } from "oak";
import staticFiles from "staticFiles";

import { productsRouter } from "./routes/products.ts";

const app = new Application({ logErrors: true });

app.use(staticFiles("app/public"));
app.use(productsRouter.routes());
app.use(productsRouter.allowedMethods());

app.listen({ port: 3333 });
