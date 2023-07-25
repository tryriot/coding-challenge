import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { router } from "./routes";
import { logger } from 'hono/logger'


const app = new Hono();

app.use("*", logger())

app.route("/api", router)


serve(app, (info) => {
  console.log(`Application started 🚀 on : http://${info.address}:${info.port}`);
});
