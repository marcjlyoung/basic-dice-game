# Basic Dice Game

Simple demo of Sequalize, GraphQL Apollo and Typescript,  making use of SQLite as an example database for bets and users

NB: This is not a production ready application

A SQLite databae file has been included to provide seeded data. Deleting it will not cause an issue, new users will need to be created. 

## Installation

- Run `npm install`

## Execution

- Run `npm start` for a demo of the application
- Run `npm dev` for a development file watcher

## Testing

- Navigate to `http://localhost:4000` on your preferred browser to demo on GraphQL Playground


## GraphQL Queries

### User

- ` getUser(id: Int): User`  
-  `getUserList: [User!]`

### Bet

- `getBet(id: Int): Bet`
- `getBetList: [Bet!]`
- `getBestBetPerUser(limit: Int): [Bet!]`

## GraphQL Mutations

### User

- `createUser(name: String!, balance: Float): User`

### Bet

- `createBet(userId: Int!, betAmount: Float!, chance: Float!): Bet`