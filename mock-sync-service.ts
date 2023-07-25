import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.json([
    {
      id: "clkidtd0c0eurrgf2j0f522kp",
      name: "Tasty Rubber Chair",
      description:
        "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
      category: "Tuna",
      price: 463,
    },
    {
      id: "clkidtd0d0eutrgf2q0fu7o3x",
      name: null,
      description:
        "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
      category: "Gloves",
      price: 224,
    },
    {
      id: "clkidtd0e0euvrgf22kompf9e",
      name: "Tasty Fresh Hat",
      description:
        "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      category: "Computer",
      price: 894,
    },
    {
      id: "clkidtd0e0euxrgf2hdalvbi8",
      name: "Modern Rubber Soap",
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      category: "Pants",
      price: 25,
    },
  ]);
});

serve(
  {
    fetch: app.fetch,
    port: 4141,
  },
  (info) => {
    console.log(
      `Sync service started 🚀 on : http://${info.address}:${info.port}`
    );
  }
);
