import { Handler, Hono } from "hono";
import { prisma } from "../utils/db.utils";
import { CustomerPurchaseProduct } from "../types";

const router = new Hono();

const purchaseProduct: Handler = (c) => {
    const body = c.req.body as any as CustomerPurchaseProduct;
    const purchased = prisma.purchase.create({
      data: {
        productId: body.productId,
        customerId: body.customerId,
      },
    });
    return c.json(purchased);
  };
  

router.get("/", purchaseProduct)


export { router };
