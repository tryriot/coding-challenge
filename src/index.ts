import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { router } from "./routes";

const app = new Hono();

app.route("/api", router)


serve(app, (info) => {
  console.log(`Application started 🚀 on : http://${info.address}:${info.port}`);
});
