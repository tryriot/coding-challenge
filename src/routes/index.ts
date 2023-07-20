import { Hono } from "hono";

import { router as productRouter } from "./product.route";
import { router as customerRouter } from "./customer.route";
import { router as purchaseRouter } from "./product.route";



const router = new Hono()

router.route("/product", productRouter)
router.route("/customer", customerRouter)
router.route("/purchase", purchaseRouter)


export { router }