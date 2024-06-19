import { Handler, Hono } from "hono";
import { prisma } from "../utils/db.utils";

const router = new Hono();

const getCustomers: Handler = async (c) => {
  const customers = [];
  return c.json(customers);
};

const getCustomerPurchaseHistory: Handler = async (c) => {
  const id = c.req.param("id");
  const customer = await prisma.customer.findUnique({
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
