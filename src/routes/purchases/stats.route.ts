import { Handler, Hono } from "hono";
import dayjs from "dayjs";
import { prisma } from "../../utils/db.utils";
import { StatsPurchaseInput } from "../../types";

const router = new Hono();

const getProductsPurchasedBetween: Handler = async (c) => {
  const { from, to }: StatsPurchaseInput = {
    from: c.req.query('from'),
    to: c.req.query('to')
  }
  const fromDate = dayjs(from).toDate();
  const toDate = dayjs(to).toDate();

  const purchasesIn = await prisma.purchase.findMany({
    where: {
      purchasedAt: {
        gte: fromDate,
        lte: toDate,
      },
    },
  });
  return c.json(purchasesIn);
};

const getCustomersWithNoPurchasesInPastYear: Handler = async (c) => {
  const customersWithNoPurchasesInPastYear = await prisma.$queryRaw`
    SELECT
        *
    FROM
        Customer
    WHERE
        id NOT in(
            SELECT
                customerId FROM Purchase
            WHERE
                purchasedAt < datetime ('now', '-1 year'))
    `;

  return c.json(customersWithNoPurchasesInPastYear);
};

router.get("/products", getProductsPurchasedBetween);
router.get("/customers", getCustomersWithNoPurchasesInPastYear);


export { router };
