# Riot Coding Challenge:

After each challenge you can take a 10 minutes break 😇

## Application debugging (1h)

This is a REST API created using Hono : https://hono.dev

This app was created with multiple bugs. Your goal is to fix them.

## Getting started

Before you start you need to have the following tools installed

- NodeJS

Using node package manager (npm, yarn or pnpm)

`npm install`

Generate prisma client:

`npm run db:generate`

And then run :

`npm run start`

This will start the server in watch mode on port 3000

For testing you have `.http` files in `test` folder. Install the VSCode extension `REST Client` https://marketplace.visualstudio.com/items?itemName=humao.rest-client to run them.

![img](https://github.com/tryriot/coding-challenge/blob/main/rest-client-extension.png)

## App overview :

This app was created to track customer purchases.

In our database we have the following :

- Product

- Customer

- Purchase

For more info check the schema in `prisma/schema.prisma`

A customer can purchase a product. This will create a new entry in the purchase table of our database

## Objectives

The current code base has some bugs and is not production ready. Your task will be to implement improvements and discuss potential enhancements and trade-offs to make it production-ready.

Here are the specs of this API:

- Get all the products in the database - `GET /products` returns all the products from the database.

- Obtain information about a product using their ID - `GET /products/:id` returns the specific product - If the product is not found, an error is returned with the correct HTTP status code.

- Make a purchase using `customerId` and `productId` - `POST /purchases` expects a JSON object `{"customerId": "CUSTOMER_ID", "productId": "PRODUCT_ID"}`

- Sync products from a 3rd party service. We are calling a 3rd party service API provided as a parameter to fetch all the product updates made on their service and sync that information in our database. We want to make sure that we either sync all the data or none (aka if one sync to the database fails the other products should not be updated/persisted) using `apiUrl` (https://tidy-chicken-75.deno.dev) -  `POST /sync`.

- Get the statistics:

  - `GET /purchases/stats/products?from=21-04-2023&to=21-05-2023` should return the products purchased between from: Date and to: Date. from should always be before to. Both dates are formatted in 'dd-MM-yyyy' format.

  - `GET /purchases/stats/customers` should return the customers who have not made purchases in the past year.

## SQL challenge (30 minutes)

1. Ask Louis for an access to the database server.

2. Your goal is to write an SQL query to find Riot's inactive workspaces, this query should meet the following criteria:

- No phishing emails sent for 1 year (`attacks.created_at`)

- No enrolments created for 1 year (`enrolments.created_at`)

3. The output of the exercise should be the SQL query itself.

4. (Bonus point), Returns the criterion column showing why this workspace should be deleted.

## Debriefing (1 hour)

- Meet the team

- Ask your questions

- Talk about your past projects

- Tell us what excites you

## Meeting with ben (30 minutes)

- Culture talk

- Company Vision

- Other questions
