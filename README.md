# Node-TS-GraphQL-Starter

This is a repo to begin experimenting with a GraphQL API built on Node and Typescript.


## To Run:
1. `npm install`
2. `npm run start`
3. Visit: localhost:3000/graphql for the graphiql interface. 


## Queries
Currently, I have two models (Products, and Users) and some seed data in memory. 

Example GET query:
```
query{
  products{
    id,
    name,
    description,
    price
  }
}
```
Should return a list of the sample products in `/products/products.sample.ts`.
