import { Handler, Hono } from "hono";
import { prisma } from "../../utils/db.utils";
import { CustomerPurchaseProduct } from "../../types";

import { router as statsRouter } from "./stats.route";

const router = new Hono();


const getPurchases: Handler = async (c) => {
  const purchased = await prisma.purchase.findMany();
  return c.json(purchased);
};

const purchaseProduct: Handler = async (c) => {
  const body = c.req.body as any as CustomerPurchaseProduct;
  const purchased = await prisma.purchase.create({
    data: {
      productId: body.productId,
      customerId: body.customerId,
    },
  });
  return c.json(purchased);
};



router.get("/", getPurchases);
router.post("/", purchaseProduct);
router.route("/stats", statsRouter);


export { router };
