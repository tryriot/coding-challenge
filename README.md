# Riot Coding Challenge:

After each challenge you can take a 15 minutes break 😇

## Application debugging (1h15)

This an REST API created using Hono : https://hono.dev

This app was created with multiple bugs. Your goal is to find and fix the bugs in the App

## Getting started
Before you start you need to have the following tools installed
- NodeJS

Using node package manager (npm, yarn or pnpm)

`npm install`

Generate prisma client:

`npx run prisma generate`

And then run :
`npm run start`

This will start the application ion port 3000

For testing you have `.http` files in `test` folder. Install the VSCode extension `REST Client` https://marketplace.visualstudio.com/items?itemName=humao.rest-client to run them.

## App overview :
This app was created to track customer purchases.

In our database we have the following :
- Product
- User
- Purchase

For more info check the schema in `prisma/schema.prisma`

A customer can purchase a product. This will create a new entry in the purchase table of our database

## Objectives
Your task is to fix all the bugs so application runs as intended. Here is what is expected from the application to do:

- Get all the products in the database - `GET /product` returns all the products in the database
- Get a product information using it's id - `GET /product/:id` returns the product specified product - if product not found you should throw an exception
- Get all the customers in the database - `GET /customer` returns all the products in the database
- Get a customer information using it's id - `GET /customer/:id` returns the product specified customer id - if product not found you should throw an exception
- Make a purchase using `customerId` and `productId` - `POST /purchase` expects a JSON object `{"customerId": "customerId", "productId": "productId"}`
- Sync purchases from a 3rd party service. We want to call a 3rd party service API to fetch all the purchases made on their service and sync that information in our database. We want to make sure that we either sync all the data or none (aka if one sync to the database fails the other purchases should not be updated)
- Get the statistics:
    - For example : `GET /purchase/product/stats?from=21-04-2023&to=21-05-2023` should return the products purchased between from: Date and to: Date. from should always be before to. Both dates are formatted in 'dd-MM-yyyy' format

## SQL challenge (45 minutes)

1. Ask Louis for an access to the database server.
2. Your goal is to write an SQL query to find Riot's inactive workspaces, this query should meet the following criteria:
   - The workspace should not be a paid workspace (`stripe_subscription_id != null`)
   - 1 year without a user connecting to the workspace (`user_workspaces.user_last_seen`)
   - No phishing emails sent for 1 year (`attacks.created_at`)
   - No enrolments created for 1 year (`enrolments.created_at`)
3. The output of the exercise should be the SQL query itself.

## Debrieffing (1 hour)

- Meet the team
- Ask your questions
- Talk about your past projects
- Tell us what excites you


## Meeting with ben (30 minutes)

- Culture talk
- Company Vision
- Other questions
