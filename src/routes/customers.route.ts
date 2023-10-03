import { Handler, Hono } from "hono";
import { prisma } from "../utils/db.utils";

const router = new Hono();

const getCustomers: Handler = (c) => {
  const products = prisma.product.findMany();
  return c.json(products);
};

const getCustomerPurchaseHistory: Handler = (c) => {
  const id = c.req.param("id");
  const customer = prisma.customer.findUnique({
    where: {
      id,
    },
    include: {
      purchases: true,
    },
  });

  return c.json(customer);
};

router.get("/", getCustomers);
router.get("/:id/purchases", getCustomerPurchaseHistory);

export { router };
