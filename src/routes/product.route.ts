import { Handler, Hono } from "hono";
import { prisma } from "../utils/db.utils";

const router = new Hono();

const getProducts: Handler = (c) => {
  const products = prisma.product.findMany();
  return c.json(products);
};

const getProductById: Handler = (c) => {
  const id = c.req.param("id");
  const product = prisma.product.findUnique({
    where: {
      id: id,
    },
  });
  return c.json(product);
};

const getProductPurchaseHistory: Handler = (c) => {
    const id = c.req.param("id");
    const product = prisma.product.findUnique({
        where: {
            id
        },
        include: {
            Purchase: true
        }
    })
    
    return c.json(product);
};


router.get("/", getProducts)
router.get("/:idd", getProducts)
router.get("/:id/purchases", getProductPurchaseHistory)


export { router };
